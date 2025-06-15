import React from "react";
import {useSelector} from "react-redux";
import {Links, Text, View} from "./Renderer";
import styles from "./Styles";
const Header = ({data}) => {
  console.log(data);
  const contactLinks = [
    {name: data["phone"], value: data["value"]},
    {name: data["email"], value: data["email"]},
    {name: data["linkedin"], value: data["linkedin"]},
    {name: data["github"], value: data["github"]},
    {name: data["blogs"], value: data["blogs"]},
    {name: data["twitter"], value: data["twitter"]},
    {name: data["portfolio"], value: data["portfolio"]},
  ];
  return (
    <div>
      <Text style={styles.header__name}>{data.name}</Text>
      <View style={styles.header__links}>
        {contactLinks
          .filter((obj) => obj.value)
          .map(({value, name}) => (
            <Links key={name} src={value} style={{color: "#555"}}>
              {name}
            </Links>
          ))}
      </View>
    </div>
  );
};

function Preview() {
  const resumeData = useSelector((state) => state.resume);
  console.log(resumeData);
  const {contact, education, experience, skills, projects, summary} =
    resumeData;
  return (
    <div className="h-[40rem] w-[28rem] md:block">
      <div style={styles.page}>
        <Header data={contact} />
      </div>
    </div>
  );
}

export default Preview;
