import OurTeam from '../OurTeam/OurTeam';

const OurTeamlList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(el => {
        return (
          <li key={el.id}>
            <OurTeam
              name={el.name}
              developer={el.developer}
              socials={el.socials}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default OurTeamlList;
