import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import TeamSpeaker from '../components/TeamSpeakers';
import PlaceDate from '../components/PlaceAndDate';
import Speakers from '../components/Speakers';
import Footer from '../components/Footer';
import Modal from '../components/Modal';


function GeekConf() {
  return (
      <React.Fragment>
      <Header />
      <Main />
      <TeamSpeaker />
      <PlaceDate />
      <Speakers />
      <Footer />
      <Modal />
      </React.Fragment>
  );
}

export default GeekConf;
