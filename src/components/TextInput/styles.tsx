@import '../../styles/index.scss';

.textinput {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
}

.textinput-header {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	line-height: 1.57;
	margin-bottom: 5px;
}

.textinput-header > cite {
	margin-left: auto;
}

.textinput > textarea,
.textinput > input {
	padding: 11px 12px;
	width: calc(100% - 24px - 2px);
	border-radius: $border-radius;
	border: solid 1px $border-color;
	background-color: $background-color-base;

	line-height: 1.57;

	transition: 0.3s ease-in all;
}

.textinput > textarea:focus,
.textinput > input:focus {
	border-color: $background-color-secondary;
	box-shadow: 0 3px 6px 0 rgba(255, 152, 77, 0.12);
}

.textinput > textarea::placeholder,
.textinput > input::placeholder {
	color: $color-dark-3;
	opacity: 0.4;
}

.textinput > textarea {
	height: 160px;
	resize: none;
}

.textinput-error > input,
.textinput-error > textarea {
	border: solid 1px $background-color-error;
}

.textinput-checkbox-container {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	margin-top: 10px;
}

.textinput-checkbox {
	width: 20px;
	height: 20px;
	border-radius: 2px;
	border: solid 1px $border-color;
	background-color: $background-color-base;

	cursor: pointer;
	margin-right: 12px;
}

.textinput-checkbox-container > p {
	line-height: 1.57;
}

.textinput-checkbox-checked {
	background-image: $check-img;
	background-position: center center;
	background-size: 10.7px 10px;
	background-repeat: no-repeat;
}

.textinput-checkbox-disabled {
	opacity: 0.5;
	cursor: auto;
	pointer-events: none;
}

.textinput-passwd-strength {
	margin-top: 8px;
	height: 10px;
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.textinput-passwd-strength-bar {
	max-width: calc(100% - 120px);
  min-width: 10px;

	height: 5px;

  background-color: $background-color-error;
	transition: 0.3s ease-in all;
	border: solid 1px rgba(37, 39, 52, 0.1);
	border-radius: $border-radius;
}

.textinput-passwd-strength-bar-medium {
  background-color: $background-color-primary;
}

.textinput-passwd-strength-bar-strong {
  background-color: $background-color-quaternary;
}
