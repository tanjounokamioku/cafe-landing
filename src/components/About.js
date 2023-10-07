import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation();

  return (
    <section className="mx-4 lg:mx-16 text-lg text-white p-8 mb-12 rounded-2xl bg-opacity-20 bg-white backdrop-blur-md">
      <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
      <p>{t('about.paragraph1')}</p>
      <br />
      <p>{t('about.paragraph2')}</p>
      <br />
      <p>{t('about.paragraph3')}</p>
    </section>
  );
}

export default About;
