async function postPledge(amount, projectId, anonymous, comment) {
  const token = window.localStorage.getItem("token");
  const url = `${import.meta.env.VITE_API_URL}/pledges/`; // Correct endpoint for pledges
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      amount: amount,
      project: projectId, // Use project ID as the foreign key
      anonymous: anonymous,
      comment: comment,
    }),
  });

  if (!response.ok) {
    const fallbackError = `Error trying to create pledge`;

    const data = await response.json().catch(() => {
      throw new Error(fallbackError);
    });

    const errorMessage = data?.detail ?? fallbackError;
    throw new Error(errorMessage);
  }

  return await response.json();
}

export default postPledge;
