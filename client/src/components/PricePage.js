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

        const changeUnit = (e) => {
            const currency = e.target.value;
            this.props.changeCurrency(currency);
        }
        return (
         
            <div>
                <h2>{symbol}{!(isNaN(rate.rate_float)) && Number(rate.rate_float).toFixed(2)}</h2>
                <form >
                    <div className="form-check">
                        <label>
                            <input 
                                type="radio" 
                                name="USD" 
                                value="USD" 
                                checked={this.props.currency === "USD"}
                                onChange={changeUnit}/>
                            USD
                        </label>
                    </div>
                   <div className="form-check">
                        <label>
                            <input 
                                type="radio" 
                                name="EUR" 
                                value="EUR" 
                                checked={this.props.currency === "EUR"}
                                onChange={changeUnit}/>
                            EUR
                        </label>
                   </div>
                    <div className="form-check">
                    <label>
                        <input 
                            type="radio" 
                            name="GBP" 
                            value="GBP"
                            checked={this.props.currency === "GBP"} 
                            onChange={changeUnit}/>
                        GBP
                    </label>
                    </div>
                 </form>
            </div>
        )
    }
} 

export default PricePage;