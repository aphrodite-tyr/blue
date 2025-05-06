import { useEffect, useRef } from "react";
import Pikaday from "pikaday";

export default function Calender() {
  const myDatepicker = useRef(null);
  useEffect(() => {
    const picker = new Pikaday({
      field: myDatepicker.current
    });
    return () => picker.destroy();
  }, []);
  return (
    <input type="text" className="input pika-single w-full" defaultValue="Pilih tanggal" ref={myDatepicker} />
  );
}