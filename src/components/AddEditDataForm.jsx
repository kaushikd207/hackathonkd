import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./Reducers/activeDataSlice";

const AddEditDataForm = ({ existingData, editingData, onCancel }) => {
  const [challengeName, setChallengeName] = useState("");
  const [description, setDescription] = useState("");
  const [overview, setOverview] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingData) {
      setChallengeName(editingData.details || "");
      setDescription(editingData.status || "");
      setOverview(editingData.overview || "");
      setImage(editingData.img || "");
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
      startDate: "",
      endDate: "",
      overview: overview,
    };

    let updatedData;

    if (editingData) {
      updatedData = existingData.map((item) =>
        item.details === editingData.details ? newCard : item
      );
    } else {
      updatedData = [...existingData, newCard];
    }

    dispatch(setData(updatedData));
    if (!editingData) {
      setChallengeName("");
      setDescription("");
      setOverview("");
      setImage("");
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md  w-[80%]">
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
