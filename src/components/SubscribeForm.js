import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class SubscribeForm extends React.Component {
    state = {
        fname:'',
        lname:'',
        email: '',
        result: '',
        message: ''
    };
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(this.state.email, {FNAME : this.state.fname, LNAME : this.state.lname});
        this.setState({ result: result.result });
        this.setState({ message: result.msg });
    };
    render() {
        return (
            <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form" onSubmit={this.handleSubmit}>
                
                <div className={`message ${this.state.result}`} dangerouslySetInnerHTML={{ __html: this.state.message}} />
                <div className="form-row-group">
                    <div className="form-row col-md-6">
                        <label>
                            <span className="screen-reader-text">First Name</span>                        
                        </label>
                        <input
                            className="subscribe-name form-control"
                            type="text"
                            name="fname"
                            placeholder="Joy"
                            value={this.state.fname}
                            onChange={this.handleInputChange}
                        />

                    </div>
                    <div className="form-row col-md-6">
                        <label>
                            <span className="screen-reader-text">Last Name</span>                        
                        </label>
                        <input
                            className="subscribe-name form-control"
                            type="text"
                            name="lname"
                            placeholder="Smith"
                            value={this.state.lname}
                            onChange={this.handleInputChange}
                        />

                    </div>
                </div>
                <div className="form-row-group">
                    <div className="form-row col-12">
                        <label>
                            <span className="screen-reader-text">Email address</span>                        
                        </label>
                        <input
                            className="subscribe-email form-control"
                            type="email"
                            name="email"
                            placeholder="joy@smith.com"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>
                

                <button className="button" type="submit">
                    Subscribe
                </button>
            </form>
        );
    }
}