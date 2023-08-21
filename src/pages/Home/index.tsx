import TextInput from '../../components/TextInput';

import './styles.scss';

const Home = () => {
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
          title="Name"
          placeholder="Enter your name"
          id="name"
        />
        <br />
        <TextInput
          isRequired
          title="Phone"
          placeholder="Enter your phone number"
          id="name"
        />
        <br />
        <br />
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Home;
