import React from 'react';
import { useTranslation } from 'react-i18next';
import matheus from '../assets/matheus.JPG';
import lucas from '../assets/lucas.jpeg';
import andressa from '../assets/andressa.jpeg';
import marco from '../assets/marco.jpeg';
import ste from '../assets/ste.jpg';
import rubens from '../assets/rubens.jpg';
import jpp from '../assets/jpp.jpeg';
import raxyz from '../assets/raxyz.jpeg'
import thorgue from '../assets/thorgue.png';
import carlos from '../assets/carlos.png';
import jooj from '../assets/jooj.jpg';
import juan from '../assets/juan.jpeg';
import hugo from '../assets/hugo.jpeg';
import lud from '../assets/lud.jpg'
import isa from '../assets/isa.jpeg'

function Team() {

  const { t } = useTranslation();

  const teamMembers = [
    { name: 'Matheus "Tanjou" Nascimento', role: t('roles.founder'), image: matheus, socialLink: 'https://twitter.com/tanjounokamioku' },
    { name: 'Andressa "Pandassauro" Araújo', role: t('roles.coFounderDeveloper'), image: andressa, socialLink: 'https://twitter.com/paaandachu' },
    { name: 'Marco "Goiabada" Tulio', role: t('roles.coFounderWriter'), image: marco, socialLink: 'https://twitter.com/Tulipasanto97' },
    { name: 'Lucas "MD" Henrique', role: t('roles.contentCreator'), image: lucas, socialLink: 'https://twitter.com/LucasMegaDrive' },
  ];

  const teamMembers2 = [
    { name: 'Rafael "Raxyz" Martins', role: t('roles.editor'), image: raxyz, socialLink: 'https://twitter.com/raxyz0' },
    { name: 'João "JooJ" Victor', role: t('roles.coFounderCollaborator'), image: jooj, socialLink: 'https://twitter.com/JooJorges' },
    { name: 'Stephanie "Lacrimowo" Vallim', role: t('roles.contentMediaChief'), image: ste, socialLink: 'https://twitter.com/lacrimowozart' },
    { name: 'Matheus "Thorgue" Rocha', role: t('roles.writerJRPGs'), image: thorgue, socialLink: 'https://twitter.com/_Thorgue' },
    { name: 'Juan "Fuan" Carlos', role: t('roles.writerActionGames'), image: juan, socialLink: 'https://twitter.com/Hiryuzera' },
    { name: 'Rubens "Nyk" Pimenta', role: t('roles.speedrunner'), image: rubens, socialLink: 'https://twitter.com/Nyk_Style' },
    { name: 'Carlos "Carlitos" Dantas', role: t('roles.writerShonen'), image: carlos, socialLink: 'https://twitter.com/crloshds' },
    { name: 'Ludmilla Lobo', role: t('roles.instagrammer'), image: lud, socialLink: 'https://www.instagram.com/ludlobo/' },
    { name: 'Isabella Xavier', role: t('roles.writerCozyGames'), image: isa, socialLink: 'https://www.instagram.com/itsmiisabella/' },
    { name: 'João "Promotor" Pedro', role: t('roles.writerMusou'), image: jpp, socialLink: 'https://twitter.com/Jotapepromotor' },
    { name: 'Hugo "Cobra Libidinosa" Izídio', role: t('roles.writerLegacyGames'), image: hugo, socialLink: 'https://twitter.com/Fudelagem' },
  ];


  return (

    <section className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <h2 className="col-span-full text-2xl font-bold mb-4 text-center">        {t('heading.presentMembers')}</h2>
      {teamMembers.map(member => (
        <div key={member.name} className="rounded-2xl p-4 text-center bg-opacity-20 bg-white backdrop-blur-md">
          <a href={member.socialLink} target="_blank" rel="noopener noreferrer">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover object-center"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
          </a>
          <p>{member.role}</p>
        </div>
      ))}
      <h2 className="col-span-full text-2xl font-bold mb-4 mt-8 text-center">        {t('heading.presentMembers')}</h2>
      {teamMembers2.map(member => (
        <div key={member.name} className="rounded-2xl p-4 text-center bg-opacity-20 bg-white backdrop-blur-md">
          <a href={member.socialLink} target="_blank" rel="noopener noreferrer">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover object-center"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
          </a>
          <p>{member.role}</p>
        </div>
      ))}
    </section>
  );
}

export default Team;
