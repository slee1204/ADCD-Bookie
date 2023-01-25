import { useState } from "react";
import axios from "axios";
import Keyword from "@/comp/Keyword";
import Button from "@/comp/Button";
import { useRouter } from "next/router";

export default function onboarding() {
  const [name, setName] = useState("");
  const [header, setHeader] = useState("Enter your name");
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const router = useRouter();

  const chooseGenres = async () => {
    setHeader("Choose your favourite genres");

    const apiKey = "AIzaSyDwqGo8hs4GSZ-NDeHRIGbVeL66zKGNDlM"

    const results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${keyword}&key=${apiKey}&maxResults=40`
    );

    for (var i = 0; i < results.data.items.length; i++) {
      const categories = results.data.items[i].volumeInfo.categories;

      if (categories !== undefined) {
        const category = categories.values();
        for (const type of category) {
          keywords.push(type);
          setKeyword(type);
        }
      }
    }
    console.log(keywords);
  };

  return <>
    <h1>{header}</h1>
    {
      !keyword && <> <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Enter your name" />
        <Button handleClick={chooseGenres} text="Next"></Button>
      </>
    }
    {
      keyword && <>
        {
          keywords.map((o, i) => (
            <Keyword key={i} value={o} />
          ))
        }
        <Button handleClick={() => router.push("/dashboard")} text="Get Recommendations"></Button>
      </>
    }

  </>
}