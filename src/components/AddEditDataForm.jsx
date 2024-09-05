import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./Reducers/allDataSlice";
import { data } from "./CardsViewPage";
import { useNavigate } from "react-router-dom";

const AddEditDataForm = ({ editingData, onCancel }) => {
  const navigate = useNavigate();
  const [challengeName, setChallengeName] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [image, setImage] = useState("");
  const [level, setLevel] = useState("Easy"); // Default to Easy
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingData) {
      setChallengeName(editingData.details || "");
      setDescription(editingData.status || "");
      setOverview(editingData.overview || "");
      setImage(editingData.img || "");
      setLevel(editingData.level || "Easy"); // Load level if editing
      setStartTime(editingData.startTime || "");
      setEndTime(editingData.endTime || "");
    }
  }, [editingData]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      img: image,
      status: description,
      details: challengeName,
      level: level, // Add level to the card data
      startTime: startTime, // Add start time
      endTime: endTime, // Add end time
      overview: overview,
    };

    let updatedData;

    if (editingData) {
      updatedData = data.map((item) =>
        item.details === editingData.details ? newCard : item
      );
    } else {
      updatedData = [...data, newCard];
      navigate("/");
    }

    dispatch(setData(updatedData));

    if (!editingData) {
      setChallengeName("");
      setDescription("");
      setOverview("");
      setImage("");
      setLevel("Easy");
      setStartTime("");
      setEndTime("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md  w-[80%]">
      {/* Challenge Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Challenge Name
        </label>
        <input
          type="text"
          value={challengeName}
          onChange={(e) => setChallengeName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Description (Status) */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description (Status)
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Overview */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Overview
        </label>
        <textarea
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      {/* Level */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Level
        </label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Start Time */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Start Time
        </label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* End Time */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          End Time
        </label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Upload Image
        </label>
        <input
          type="file"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {editingData ? "Update Challenge" : "Create Challenge"}
        </button>
        {editingData && (
          <button
            type="button"
            onClick={onCancel}
            className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default AddEditDataForm;
