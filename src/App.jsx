import { useState } from "react";
import { Button } from "./shared/ui/Button";

export default function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // console.log("Button clicked");
    setTimeout(() => setLoading(false), 2000);
  };

  return (
      <Button
        onClick={handleClick}
        color="primary"
        loading={loading}
        style={{ width: "300px" }}
      >
        Отправить
      </Button>
  );
}

