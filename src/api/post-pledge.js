async function postPledge(projectId, amount, anonymous = false, comment = "") {
  // Define the URL for the pledge creation endpoint
  const url = `${import.meta.env.VITE_API_URL}/pledges/`;

  // Retrieve the token from localStorage
  const token = window.localStorage.getItem("token");
  console.log("Token retrieved from localStorage:", token); // Add this line to debug

  // Check if the token exists; if not, throw an error
  if (!token) {
    throw new Error("Authentication credentials were not provided.");
  }

  // Prepare the request body
  const bodyData = {
    project: projectId,
    amount: amount,
    anonymous: anonymous,
    comment: comment || "", // Ensure empty comment is handled
  };

  try {
    // Make the POST request to create the pledge
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`, // Use the correct token retrieved from localStorage
      },
      body: JSON.stringify(bodyData),
    });

    // Handle response
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Failed to create pledge: ${errorData.detail || "Unknown error"}`
      );
    }

    // Return the JSON response if the request is successful
    return await response.json();
  } catch (error) {
    // Log the error (optional)
    console.error("Error during pledge creation:", error);
    throw error; // Re-throw the error to be handled by the calling function
  }
}

export default postPledge;
