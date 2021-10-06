const handleSubmit = (e) => {
  e.preventDefault();

  // getting dom elements
  const agreement = document.getElementById("agreement");
  const subjectivity = document.getElementById("subjectivity");
  const confidence = document.getElementById("confidence");
  const irony = document.getElementById("irony");
  const score_tag = document.getElementById("score_tag");
  const URL_input = document.getElementById("article-url");
  // clear data

  agreement.innerText = "";
  subjectivity.innerText = "";
  confidence.innerText = "";
  irony.innerText = "";
  score_tag.innerText = "";

  // get value from
  const URL = URL_input.value;

  // validate url first
  if (!Client.validateUrl(URL)) {
    return alert("Please enter valide Url");
  }
  console.log(URL);
  // using fetch due to cors problem with axios
  fetch("http://localhost:8000/post", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: URL }),
  })
    .then((res) => res.json())
    .then((data) => {
      agreement.innerText = `Agreement: ${data.agreement}`;
      subjectivity.innerText = `Subjectivity: ${data.subjectivity}`;
      confidence.innerText = `Confidence: ${data.confidence}`;
      irony.innerText = `Irony: ${data.irony}`;
      score_tag.innerText = `Score: ${data.score_tag}`;
    })
    .catch((err) => {
      console.log("error: ", err);
    });
};

export default handleSubmit;
