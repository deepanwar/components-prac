import React, { useState } from 'react';
import Form from './components/Form';
import Heading from '../../components/Heading';
import Table from '../../components/Table';

const FormNTable = () => {
  const [songsList, setSongsList] = useState([
    { id: 7, title: 'Maps', singer: 'Maroon 5' },
  ]);

  const handleFormSubmit = (data) => setSongsList((prev) => [data, ...prev]);

  return (
    <div>
      <Heading>Input in form and display in table.</Heading>

      <Form onSubmit={handleFormSubmit} />
      <Table songsList={songsList} />
    </div>
  );
};

export default FormNTable;
