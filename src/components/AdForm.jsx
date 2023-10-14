import { useState } from "react";
import CustomDialog from "./Dialog";

export default function AdForm({ isMediaIncluded, setOpenForm, setAdType }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
console.log(isDialogOpen)
  const openDialog = () => {
    setIsDialogOpen(true
      );
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  
  return (<>
    <form onSubmit={(e) => { e.preventDefault() }}>

      <div className="flex-row">
        <div className="flex-col">
          <label htmlFor="heading1">
            {" "}
            Heading 01
            <input
              type="text"
              id="heading1"
              placeholder="Add a heading that would make users interested"
            />
          </label>
          <label htmlFor="heading1">
            {" "}
            Heading 02
            <input
              type="text"
              id="heading2"
              placeholder="Add a heading that would make users interested"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            {" "}
            Description 01
            <textarea
              name="description"
              id=""    
              row="9"         
              placeholder="Add primary text to help users understand more about your products services or offers"
            ></textarea>
          </label>
        </div>
      </div>
      {isMediaIncluded && (
        <>
          <div className="flex-row">
            <label htmlFor="">
              Landscape Marketing Image (1.9:1)
              <input
                type="text"
                placeholder="Add the URL of the Image you want to use for the ad"
              />
            </label>
            <label htmlFor="">
              Portrait Marketing Image (4:5)
              <input
                type="text"
                placeholder="Add the URL of the Image you want to use for the ad"
              />
            </label>
            <label htmlFor="">
              Square Marketing Image (1:1)
              <input
                type="text"
                placeholder="Add the URL of the Image you want to use for the ad"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              Video Url
              <input
                type="text"
                placeholder="Add the URL of the Video you want to use for the ad "
              />
            </label>
          </div>
        </>
      )}
      <div className="flex-row">
        <label htmlFor="business">Business Name
          <input
            type="text"
            id="business"
            placeholder="Add your business name"
          />
        </label>
        <label htmlFor="button label">Button Label
          <input
            type="text"
            id="button label"
            placeholder="Select a label that best suits your ad"
          />
        </label>
      </div>
      <div >
        <label htmlFor="website"> Website URL
          <input
            type="text"
            name="website"
            placeholder="Add the URL of the landing page you want to redirect users to"
          />
        </label>
      </div>
      {isDialogOpen &&
      <CustomDialog  isOpen={isDialogOpen} onClose={closeDialog}/>
      }
     
    </form> 
    <div className="buttons">
        <button className="secondaryButton" onClick={() => { setOpenForm(false); setAdType({ media: false, text: false }) }}>Back</button>
        <button className="primaryButton" onClick={() => {  openDialog();
        }}>Submit</button>
      </div>
     
      </>

  );
}
