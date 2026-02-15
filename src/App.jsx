import React, { useState } from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ||
  "https://diabetes-backend-flask.onrender.com";

const App = () => {
  const [form, setForm] = useState({
    gender: "",
    age: "",
    hypertension: "",
    heart_disease: "",
    smoking_history: "",
    bmi: "",
    HbA1c_level: "",
    blood_glucose_level: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const payload = {
        ...form,
        hypertension: form.hypertension === "1" ? 1 : 0,
        heart_disease: form.heart_disease === "1" ? 1 : 0,
        age: Number(form.age),
        bmi: Number(form.bmi),
        HbA1c_level: Number(form.HbA1c_level),
        blood_glucose_level: Number(form.blood_glucose_level),
      };

      const response = await fetch(`${API_BASE_URL}/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Server error");
      }

      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">
        🩺 Diabetes Assessment
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Fill out the form below to get your personalized diabetes prediction.
        All information is kept confidential.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Gender */}
          <div>
            <label className="block font-semibold mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block font-semibold mb-1">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={form.age}
              onChange={handleChange}
              min="0"
              max="100"
              required
              className="w-full border rounded-lg p-2"
            />
          </div>

      
          <div>
            <label className="block font-semibold mb-1">Hypertension</label>
            <select
              name="hypertension"
              value={form.hypertension}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

         
          <div>
            <label className="block font-semibold mb-1">Heart Disease</label>
            <select
              name="heart_disease"
              value={form.heart_disease}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select</option>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Smoking History
            </label>
            <select
              name="smoking_history"
              value={form.smoking_history}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select</option>
              <option value="never">Never</option>
              <option value="No Info">No Info</option>
              <option value="current">Current</option>
              <option value="former">Former</option>
            </select>
          </div>

 
          <div>
            <label className="block font-semibold mb-1">BMI</label>
            <input
              type="number"
              step="any"
              name="bmi"
              placeholder="Enter BMI"
              value={form.bmi}
              onChange={handleChange}
              required
              min="10"
              max="60"
              className="w-full border rounded-lg p-2"
            />
          </div>

       
          <div>
            <label className="block font-semibold mb-1">
              Glycated Hemoglobin (%)
            </label>
            <input
              type="number"
              step="any"
              name="HbA1c_level"
              placeholder="Enter HbA1c Level"
              value={form.HbA1c_level}
              onChange={handleChange}
              required
              min="3"
              max="15"
              className="w-full border rounded-lg p-2"
            />
          </div>

        
          <div>
            <label className="block font-semibold mb-1">
              Blood Glucose Level (mg/dL)
            </label>
            <input
              type="number"
              name="blood_glucose_level"
              placeholder="Enter Blood Glucose Level"
              value={form.blood_glucose_level}
              onChange={handleChange}
              required
              min="50"
              max="400"
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg w-full transition duration-200"
        >
          {loading ? "Predicting..." : "🔍 Predict Diabetes"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div
          className={`mt-6 px-6 py-4 rounded-2xl border text-center w-full max-w-md ${
            result === "Diabetic"
              ? "bg-red-100 border-red-400 text-red-700"
              : "bg-green-100 border-green-400 text-green-800"
          }`}
        >
          <h3 className="font-semibold text-lg">Prediction Result</h3>
          <p className="mt-2 text-xl font-bold">{result}</p>

          <p className="mt-2 text-sm">
            {result === "Diabetic"
              ? "You may be diabetic. Please consult a healthcare provider."
              : "You show no signs of diabetes. Maintain a healthy lifestyle."}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
