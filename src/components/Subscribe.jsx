import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Subscribe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qtxlshl",
        "template_8ynjoff",
        form.current,
        "Wh_8u_bq0IJ1phFNg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="tablet:flex mt-10 mb-10 justify-evenly w-full">
        <div>
          <h3 className="text-2xl font-bold mb-4">SIGN UP FOR NEWS & OFFERS</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col w-80">
              <input
                type="text"
                name="user_name"
                className="border mb-2 px-1"
                placeholder="Enter your name"
              />

              <input
                type="email"
                name="user_email"
                className="border mb-2 px-1"
                placeholder="example@email.com"
              />
            </div>

            <button
              className="bg-buttonsSecondaryColor w-80 py-2 mb-2 text-textPrimary mt-1 font-semibold"
              type="submit"
              value="Send"
            >
              SUBSCRIBE
            </button>
          </form>
          <h6 className="text-xs">
            By submitting this form, you agree to our Terms & Conditions and
            Privacy Policy.
          </h6>
        </div>
        <div className="w-80 justify-center mt-10 tablet:mt-0">
          <h3 className="text-l font-semibold mb-5">Follow us: </h3>
          <div className="grid grid-cols-5">
            <div>
              <img
                src="https://images.ctfassets.net/m8onsx4mm13s/7z1pAOQBLHEuVOVM6LRPcx/b780b4f8014da92d2580f7ee4e2db124/icon-instagram.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/m8onsx4mm13s/35Oaae1J6dqWxeuNAvrNwa/b25005683fd9757a05a84e4178b83512/icon-twitter.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/m8onsx4mm13s/StLA124Qs8nCQs8QAfEhs/ee76f7cd2e1231ff501e87a86adfb078/icon-youtube.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/m8onsx4mm13s/4LXqNqHU1A4TwofkuQiyTG/eafd61f24af8995e99e8e23f9e348952/icon-facebook.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.ctfassets.net/m8onsx4mm13s/4wAHtxp4Tw35DxLOA1jgcM/6e020e6de55d1e02c088b32752763df5/icon-msg.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;