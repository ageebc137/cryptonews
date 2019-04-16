import React, {Component} from 'react';

class PricePage extends Component {
    render() {
        let rate, symbol;
        if (this.props.currency === 'USD') {
            rate = {...this.props.price.USD}; symbol = '$';
        }else if (this.props.currency === 'GBP') {
            rate = {...this.props.price.GBP}; symbol ='£';
        }else if (this.props.currency === 'EUR') {
            rate = {...this.props.price.EUR}; symbol = '€';
        }
        return (
            <div>
                <h1>PricePage</h1>
                <h2>{symbol}{!(isNaN(rate.rate_float)) && Number(rate.rate_float).toFixed(2)}</h2>
            </div>
        )
    }
} 

export default PricePage;