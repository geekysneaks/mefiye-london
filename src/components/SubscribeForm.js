import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class SubscribeForm extends React.Component {
    state = {
        fname:'',
        lname:'',
        email: '',
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
        this.setState({ message: result.msg });
    };
    render() {
        return (
            <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form" onSubmit={this.handleSubmit}>
                <div className="form-row-group"><div className="message" dangerouslySetInnerHTML={{ __html: this.state.message}} /></div>
                <div className="form-row-group">
                    <div className="form-row col">
                        <label>
                            <span className="screen-reader-text">First Name</span>
                            <input
                                className="subscribe-name"
                                type="text"
                                name="fname"
                                placeholder="Joe"
                                value={this.state.fname}
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="form-row col">
                        <label>
                            <span className="screen-reader-text">Last Name</span>
                            <input
                                className="subscribe-name"
                                type="text"
                                name="lname"
                                placeholder="Smith"
                                value={this.state.lname}
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="form-row-group">
                    <div className="form-row">
                        <label>
                            <span className="screen-reader-text">Email address</span>
                            <input
                                className="subscribe-email"
                                type="email"
                                name="email"
                                placeholder="Enter Email Address..."
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                </div>
                

                <button className="button" type="submit">
                    Subscribe
                </button>
            </form>
        );
    }
}