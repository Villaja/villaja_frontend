import PropTypes from "prop-types";
import "./IconInputFields.css";

const IconInputFields = ({
  leadingIcon = true,
  state,
  text = "Jake Smith",
  text1 = "Full Name",
}) => {
  const isDefaultState = ["default", "disabled", "entered", "focus", "valid"].includes(state);
  const isActiveState = state === "active";
  const isInfoState = ["active-info", "disabled-info", "invalid"].includes(state);

  return (
    <div className={`icon-input-fields state-${state}`}>
      {isDefaultState && (
        <div className={`frame-9`}>
          {leadingIcon && (
            <img
              className="bx-search-2"
              alt="Bx search"
              src={state === "valid" ? "/img/bx-search-6.svg" : "/img/bx-search-7.svg"}
            />
          )}

          <div className="default-3">
            {["default", "focus"].includes(state) && <>{text}</>}

            {["disabled", "entered", "valid"].includes(state) && <>Jane Jonah</>}
          </div>
        </div>
      )}

      {isActiveState && <img className={`frame-10 `} alt="Frame" src="/img/frame-20.svg" />}

      {["active", "default", "disabled", "entered", "focus", "valid"].includes(state) && (
        <div className="default-4">{text1}</div>
      )}

      {isInfoState && (
        <>
          <div className="default-5">
            {state === "invalid" && <>{text1}</>}

            {["active-info", "disabled-info"].includes(state) && <div className="default-6">{text1}</div>}
          </div>
          <div className="frame-11">
            {leadingIcon && <img className="bx-search-2" alt="Bx search" src="/img/bx-search-3.svg" />}

            <div className="default-7">Jane</div>
          </div>
          <div className="invalid-input">
            {state === "invalid" && <>Invalid input</>}

            {["active-info", "disabled-info"].includes(state) && (
              <p className="text-wrapper-19">Information on this field’s requirements</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

IconInputFields.propTypes = {
  leadingIcon: PropTypes.bool,
  state: PropTypes.oneOf([
    "active-info",
    "active",
    "entered",
    "default",
    "focus",
    "valid",
    "invalid",
    "disabled-info",
    "disabled",
  ]),
  text: PropTypes.string,
  text1: PropTypes.string,
};

export default IconInputFields;
