import React, {Component} from 'react';

class SettingsPage extends Component {

    
    render() {
        const changeUnit = (e) => {
            const currency = e.target.value;
            this.props.changeCurrency(currency);
        }
        return(
            <div>
                <form >
                    <h4>Currency</h4>
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

export default SettingsPage;