import { useState } from 'react';
import TextInput from '../../components/TextInput';

import './styles.scss';

const Home = () => {
	const [isLoading, toggleLoading] = useState<boolean>(false);
	const [isErrorEnabled, toggleError] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');

	const handleNameChange = (value: string) => {
		setName(value);
	};

	const handlePhoneChange = (value: string) => {
		setPhone(value);
	};


	const handleSubmit = async () => {
		toggleError(true);
		if (!isLoading && name.length && phone.length === 10) {
			toggleLoading(true);
      // NOTE: Add your API call here
		}
	};

	return (
		<div className="container home">
			<div className="home__form">
				<h4>Oh, hello there!</h4>
				<br />
				<p>
					Submit form to add a new row to{' '}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://docs.google.com/spreadsheets/d/1LSZocCyaLcSArtNyf0inxa6xgICDHBaLEbxf6UIA-6U/edit#gid=0">
						this
					</a>{' '}
					google doc.
				</p>
				<br />
				<br />
				<TextInput
					isRequired
					characterLimit={20}
					isDisabled={isLoading}
					onChange={handleNameChange}
					isErrorEnabled={isErrorEnabled}
					title="Name"
					placeholder="Enter your name"
					id="name"
				/>
				<br />
				<TextInput
					isRequired
					isDisabled={isLoading}
					characterLimit={10}
					onChange={handlePhoneChange}
					isErrorEnabled={isErrorEnabled}
					isPhone
					title="Phone"
					placeholder="Enter your phone number"
					id="name"
				/>
				<br />
				<br />
				<button
					tabIndex={0}
					className={`btn ${isLoading ? 'btn--loading' : ''}`}
					onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</div>
	);
};

export default Home;
