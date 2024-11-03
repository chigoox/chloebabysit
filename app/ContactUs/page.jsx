'use client'
// pages/contact.js
import { Button, Card, Container, Grid, Input, Link, Row, Spacer, Text, Textarea } from "@nextui-org/react";
import { div } from "framer-motion/client";
import React from 'react';

const ContactUs = () => {
    return (
        <div className="center-col">
            <div className="center relative top-24 font-bold"><Link href="/">Home</Link></div>
            <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
                <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800">Contact Us</h2>
                    <p className="mb-8 text-center text-gray-600">We’d love to hear from you! Please reach out with any questions or feedback.</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                placeholder="Your Message"
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#f26d5c] px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>Or reach us at: <strong>contact@nannycare.com</strong></p>
                        <p>Call us: <strong>(123) 456-7890</strong></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;
