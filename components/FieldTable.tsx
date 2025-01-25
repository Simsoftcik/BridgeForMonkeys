import React from 'react';
import { Table, Td, Th, Tr } from 'nextra/components'
import HeightLight from "@components/HeightLight";


interface FieldTableProps {
  data: Array<{
    field: string;
    type: string;
    desc: string;
  }>;
}


const FieldTable: React.FC<FieldTableProps> = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p>No data available</p>;
    }

  return (
    <Table className="nextra-table" style={{marginTop: '1rem'}}>
      <thead>
      <Tr>
        <Th>Pole</Th>
        <Th>Typ</Th>
        <Th>Opis</Th>
      </Tr>
      </thead>
      <tbody>
      {data.map((item, index) => (
        <Tr key={index}>
          <Td>
            <HeightLight>{item.field}</HeightLight>
          </Td>
          <Td><strong>{item.type}</strong></Td>
          <Td>{item.desc}</Td>
        </Tr>
      ))}
      </tbody>
    </Table>
  );
};

export default FieldTable;