import React, { useRef, useState } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
function Home() {
  const firstName = useRef();
  const lastName = useRef();
  const address = useRef();
  const ref = collection(firestore, "user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(ref, {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        address: address.current.value,
      });
      firstName.current.value = "";
      lastName.current.value = "";
      address.current.value = "";
      alert("Document successfully written!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" ref={firstName} />
        <label>Last Name</label>
        <input type="text" ref={lastName} />
        <label>Address</label>
        <input type="text" ref={address} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Home;
