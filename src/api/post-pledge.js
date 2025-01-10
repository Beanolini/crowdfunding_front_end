// post-pledge.js

const postPledge = async (amount, projectId, anonymous, comment) => {
  // Validate the input parameters
  if (!amount || amount <= 0) {
    throw new Error("Amount must be a positive number.");
  }

  if (!projectId) {
    throw new Error("Project ID is required.");
  }

  const token = window.localStorage.getItem("token");

  // Prepare the request payload
  const payload = {
    amount,
    project: projectId,
    anonymous,
    comment: comment || "", // Ensure comment is an empty string if not provided
  };

  try {
    // Make the POST request
    const response = await fetch(`${import.meta.env.VITE_API_URL}/pledges/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
        // Include any other headers here (like Authorization if needed)
      },
      body: JSON.stringify(payload),
    });

    // Handle response: Check for non-2xx status codes
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.detail || "Failed to create pledge. Unknown error."
      );
    }

    // Return the successful response data
    return await response.json();
  } catch (error) {
    console.error("Error during pledge creation:", error); // Log detailed error for debugging
    throw error; // Re-throw the error to be handled by the caller (in this case, PledgeForm)
  }
};

export default postPledge;
