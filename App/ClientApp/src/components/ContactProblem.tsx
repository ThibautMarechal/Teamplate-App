import React from 'react';

export default ({ subject }: { subject: string }) => <p>Une erreur est survenue. Si cela persiste, veuillez contacter <a href={`mailto:contact@thibautmarechal.be?subject=${subject}`}>Thibaut (contact@thibautmarechal.be)</a> 🤔</p>;
