import { forwardRef } from "react";
import "./styles/Button.scss";

function Button({ styles, onClick, label, className }, ref) {
    return (
        <button
            ref={ref}
            style={styles}
            onClick={(e) => onClick(e)}
            className={className}
        >
            {label}
        </button>
    );
}

export default forwardRef(Button);
