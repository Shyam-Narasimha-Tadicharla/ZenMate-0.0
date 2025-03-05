import React, { useState } from "react";
import axios from "axios";
import { Mail } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdSubject } from "react-icons/md";
import ContactCard from "./Contact_card";
import { motion } from "framer-motion";
import Layout from "../../components/layout/layout";

// Contact details
const details = ["Phone", "Email", "Address", "Physical address"];

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  
  // Validate input fields
  const validateForm = () => {
    const errors = {};
  
    // Check if name, email, subject, phone, and message are empty
    if (!contact.name) errors.name = "Name is required!";
    if (!contact.email) errors.email = "Email is required!";
    if (!contact.subject) errors.subject = "Subject is required!";
    if (!contact.phone) errors.phone = "Phone number is required!";
    if (!contact.message) errors.message = "Message is required!";
  
    // Validate email format (basic regex check for valid email)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (contact.email && !emailPattern.test(contact.email)) {
      errors.email = "Please enter a valid email address!";
    }
  
    // Validate phone number: should only contain 10 digits
    const phonePattern = /^\d{10}$/;
    if (contact.phone && !phonePattern.test(contact.phone)) {
      errors.phone = "Phone number must be exactly 10 digits!";
    }
  
    return errors;
  };
  

  // Handle form submission
  const SubmitHandler = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    setErrors(formErrors);

    // If there are errors, stop the submission
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    try {
      const res = await axios.post(process.env.REACT_APP_API_LINK + "/api/home/postQuery", contact);
  
      console.log("Response:", res);
      console.log("Response status:", res.status);
      console.log("Response data:", res.data);
  
      // If status is 200 (successful)
      if (res.status === 200) {
        console.log("Query posted successfully");
        alert("Form submitted Successfully!");
        
        // Clear the form after successful submission
        
        setContact({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("Error posting query: Unexpected status code", res.status);
      }
    } catch (error) {
      console.error("Error posting query:", error);
      if (error.response) {
        console.error("Error response:", error.response);
      } else {
        console.error("Network error or timeout:", error);
      }
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Color change for message length
  const getColor = () => {
    const count = contact.message.length;

    if (count >= 0 && count <= 100) {
      return "#22c55e";
    } else if (count >= 101 && count <= 200) {
      return "#f59e0b";
    } else if (count >= 201 && count <= 299) {
      return "#f97316";
    } else {
      return "#dc2626";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden mt-2">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: 'url("https://inspiringgo.vercel.app/assets/Contact_us-a92dc940.jpg")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-blue-900 opacity-80" /> {/* Dark overlay */}

        <div className="relative h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl mb-2">Contact Us</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="mt-[5rem] flex h-fit pb-10">
        <div className="flex m-auto w-[70vw] gap-16 flex-wrap">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="flex-[2] h-fit border border-gray-400 rounded-sm"
          >
            <div className="p-8">
              <h1 className="text-4xl font-[600]">
                Interested in{" "}
                <span className="text-blue-500 transition ease-in duration-300 hover:text-black">
                  discussing
                </span>
                ?
              </h1>
              <h3 className="mt-5 text2xl text-gray-500">
                Use our Contact Form to get personal with us!
              </h3>
              <form
                onSubmit={SubmitHandler}
                className="mt-5 flex flex-col gap-2 w-full"
              >
                <div className="flex flex-wrap gap-6 items-center">
                  {/* Name */}
                  <div className="flex-[1] min-w-[15vw] max-w-[20vw]">
                    <label className="font-normal text-gray-500">NAME</label>
                    <div className="relative flex items-center">
                      <MdDriveFileRenameOutline
                        size={28}
                        className="absolute left-2 top-[1.2rem] fill-gray-700 text-white"
                      />
                      <input
                        type="text"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                        className="mt-2 border border-zinc-400 p-3 pl-[2.5rem] w-[100%] rounded-md outline-none placeholder:text-zinc-500"
                      />
                    </div>
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex-[1] min-w-[15vw] max-w-[20vw]">
                    <label className="font-normal text-gray-500">EMAIL</label>
                    <div className="relative flex items-center">
                      <Mail
                        size={28}
                        className="absolute left-2 top-[1.2rem] fill-gray-700 text-white"
                      />
                      <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                        className="mt-2 border border-zinc-400 p-3 pl-[2.5rem] w-[100%] rounded-md outline-none placeholder:text-zinc-500"
                      />
                    </div>
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                  </div>

                  {/* Subject */}
                  <div className="flex-[1] min-w-[15vw] max-w-[20vw]">
                    <label className="font-normal text-gray-500">SUBJECT</label>
                    <div className="relative flex items-center">
                      <MdSubject
                        size={28}
                        className="absolute left-2 top-[1.2rem] fill-gray-700 text-white"
                      />
                      <input
                        type="text"
                        name="subject"
                        value={contact.subject}
                        onChange={handleChange}
                        placeholder="Enter Subject"
                        className="mt-2 border border-zinc-400 p-3 pl-[2.5rem] w-[100%] rounded-md outline-none placeholder:text-zinc-500"
                      />
                    </div>
                    {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex-[1] min-w-[15vw] max-w-[20vw]">
                    <label className="font-normal text-gray-500">PHONE</label>
                    <div className="relative flex items-center">
                      <FaPhoneAlt
                        size={26}
                        className="absolute left-2 top-[1.2rem] fill-gray-700 text-white"
                      />
                      <input
                        type="text"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        placeholder="Enter Number"
                        className="mt-2 border border-zinc-400 p-3 pl-[2.5rem] w-[100%] rounded-md outline-none placeholder:text-zinc-500"
                      />
                    </div>
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                  </div>
                </div>

                {/* Message */}
                <div className="">
                  <label className="font-normal text-gray-500">MESSAGE</label>
                  <textarea
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                    placeholder="Enter Message...."
                    className="mt-2 w-full border border-zinc-400 p-4 h-[13rem] rounded-md outline-none placeholder:text-zinc-500 placeholder:tracking-widest"
                    maxLength={300}
                  ></textarea>
                  <p className="text-black-500 text-sm italic"><span style={{color: getColor()}}>{contact.message.length}</span> / 300 characters</p>
                  {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="submit"
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                  className="bg-blue-500 p-4 rounded-md text-white font-[600] text-lg hover:bg-blue-600"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Card Section */}
          <div className="flex-[1] flex flex-col gap-5">
            {details.map((detail, idx) => (
              <ContactCard src={detail} key={detail} delay={0.1 * idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <Layout>
      <div className="w-full relative">
        <ContactUs />
      </div>
    </Layout>
  );
};

export default Contact;
