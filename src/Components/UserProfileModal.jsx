// UserProfileModal.js
import React, { useState, useRef } from "react";
import "./UserProfileModal.css";
import userImage from "../assets/sana.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const UserProfileModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("M SanaUllah");
  const [email, setEmail] = useState("msanaullah0764@gmail.com");
  const [bio, setBio] = useState("Hello, I'm a React programmer.");
  const [newImage, setNewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleSaveChanges = () => {
    // Use the new image if available, otherwise use the current image or default image
    const updatedImage = newImage ? URL.createObjectURL(newImage) : userImage;

    setIsEditing(false);
    onClose();
  };

  const handleImageClick = () => {
    // Trigger the file input when the image is clicked
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    // Handle image file change
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleEditClick = () => {
    // Enable editing when the edit icon is clicked
    setIsEditing(true);
  };

  return (
    <div className={`user-profile-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="profile-image" onClick={handleImageClick}>
          <label htmlFor="image-upload">
            {newImage ? (
              <img
                src={URL.createObjectURL(newImage)}
                alt="Profile"
                className="profile-image"
              />
            ) : (
              <img
                src={userImage}
                alt="Profile"
                className="profile-image-width"
              />
            )}
          </label>
          {!newImage && (
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          )}
        </div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
          />
        </label>
        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            disabled={!isEditing}
          />
        </label>
        <div className="flex">
          {isEditing && (
            <>
              <button onClick={handleSaveChanges}>Save Changes</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
          {!isEditing && (
            <button onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} /> Edit
            </button>
          )}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
