import { useHistory } from "react-router-dom";

export default function Success() {
  const history = useHistory();

  return (
    <div className="success-container">
      <p>Giriş Başarılı</p>
    </div>
  );
}
