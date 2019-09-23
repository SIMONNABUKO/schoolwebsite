import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import "../../App.css";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

class Contact extends React.Component{
    NameRef = React.createRef();
    EmailRef = React.createRef();
    PhoneRef = React.createRef();
    MessageRef = React.createRef();

    handleSubmit =event=>{
        event.preventDefault();
        const contactDetails = {
        name : this.NameRef.current.value,
        email :this.EmailRef.current.value,
        phoneNumber : this.PhoneRef.current.value,
        message:this.MessageRef.current.value
        };
        console.log(contactDetails);
        this.props.saveContactDetails(contactDetails); 
        
    }
       
    
    
    render(){
        return (
            <div>
                <Header/>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text"
                     className="form-control"
                      placeholder="Your Name"
                       ref={this.NameRef}/>
                </div>
                 <div className="form-group">
                    <input type="email"
                     className="form-control"
                      placeholder="Your Email"
                        ref={this.EmailRef}/>
                </div>
                 <div className="form-group">
                    <input type="phone" 
                    className="form-control"
                     placeholder="Your Phone"
                       ref={this.PhoneRef}/>
                </div>
                 <div className="form-group">
                    <textarea type="text"
                     className="form-control"
                      placeholder="Your Message"
                       ref={this.MessageRef}>
                       
                    </textarea>
                </div>
                <button type="submit">Send Message</button>
                </form>
                <Footer/>
            </div>
        )
    }
}
export default Contact;