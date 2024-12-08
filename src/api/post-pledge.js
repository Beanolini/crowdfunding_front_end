async function postPledge(amount, project, user, anonymous, comment) {
  const token = window.localStorage.getItem("token");
  const url = `${import.meta.env.VITE_API_URL}/projects/`;
  const response = await fetch(url, {
    method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      amount: amount,
      project: project,
      user: user,
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
