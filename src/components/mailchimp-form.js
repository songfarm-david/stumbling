import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailchimpForm extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            result: null,
            msg: ""
        }
    }

    _handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(
            this.state.email, 
            { FNAME: this.state.name }
        )
        this.setState({
            result: result.result,
            msg: result.msg
        })
        // console.log('submit', this.state)
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    render() {
        return this.state.result === "success" ? (
                <div>
                    <h3>Success</h3>
                    <p>{this.state.msg}</p>
                </div>
            ) : this.state.result === "error" ? (
                <div>   
                    <h3>Error</h3>
                    <p dangerouslySetInnerHTML={{__html: this.state.msg}} />
                </div>
            ) : (
            <div>
		        <h3 id="mailing-list" className="header h1">Join the mailing list to get notified of new posts.</h3>
                <form id="subscribeForm"
                    className="flex-form"
                    name="subscription-form"
                    // action={`/${props.slug}/?subscription_confirmed`}
                    // method="post"
                    onSubmit={this._handleSubmit}>
                    {/* <input type="hidden" name="bot-field" /> */}
                    <input type="hidden" name="form-name" value="subscription-form"
                    />
                    <div className="flex-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={this._handleChange} name="name" id="name" required />
                    </div>
                    <div className="flex-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" onChange={this._handleChange} name="email" id="email" required />
                    </div>
                    {/* <div data-netlify-recaptcha="true"></div> */}
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        )
    }
}