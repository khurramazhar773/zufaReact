import React from 'react';
import Layout from '../Components/Layout/Layout';
import ContactForm from '../Components/ContactForm';

const ContactPage = () => {
    return (
        <Layout>
            <section className="body-font relative">
                
                    {/* Contact Form Section */}
                    <ContactForm />
            </section>
        </Layout>
    );
};

export default ContactPage;
