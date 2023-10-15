import { useState } from "react";
import { toast } from "react-toastify";
import AdForm from "../components/AdForm";
import ad1 from "../utils/images/ad1.png";
import ad2 from "../utils/images/ad2.png";

export default function CreateAds() {
  const [openForm, setOpenForm] = useState(false);
  const [adType, setAdType] = useState({
    text: false,
    media: false,
  });
  const isMediaIncluded = (adType.text && adType.media) || adType.media;
  if (!openForm)
    return (
      <div className="adContainer">
        <p>Create Ads</p>
        <div className="options">
          <label htmlFor="text_ad">
            <input
              type="checkbox"
              name="text_ad"
              id="text_ad"
              onChange={(e) => {
                setAdType({ ...adType, text: e.target.checked });
              }}
            />

            <div>
              <img src={ad2} alt="ad" />
              <div className="lightText">create</div>
              <b>Text Ad</b>
            </div>
          </label>
          <label htmlFor="media_ad">
            <input
              type="checkbox"
              name=""
              id="media_ad"
              onChange={(e) => {
                setAdType({ ...adType, media: e.target.checked });
              }}
            />
            <div>
              <img src={ad1} alt="ad" />
              <div className="lightText">create</div>
              <b>Media Ad</b>
            </div>
          </label>
        </div>
        <div className="button">
          <button
            className="primaryButton"
            onClick={() => {
              if (adType.text || adType.media) {
                setOpenForm(true);
              } else {
                toast.info("Select any one type of Ad");
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  else
    return (
      <div className="adContainer">
        <p>Create Text & Media</p>
        <AdForm
          isMediaIncluded={isMediaIncluded}
          setAdType={setAdType}
          setOpenForm={setOpenForm}
        />
      </div>
    );
}
