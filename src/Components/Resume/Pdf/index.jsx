import {Link, Text, View, Document, Page} from "@react-pdf/renderer";
import styles from "../Styles";
import Section from "./Section";
import formatDate from "../../../../utils/formatDate";
import ListItem from "./ListItem";

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
    <Section>
      <Text style={styles.header__name}>{data.name}</Text>
      <View style={styles.header__links}>
        {contactLinks
          .filter((obj) => obj.value)
          .map(({value, name}) => (
            <Link key={name} src={value} style={{color: "#555"}}>
              {name}
            </Link>
          ))}
      </View>
    </Section>
  );
};

const Education = ({data}) => (
  <Section title="Education">
    {data.map(({degree, institution, start, end, location, gpa}, i) => (
      <View key={i} style={styles?.wrapper}>
        <View style={styles.title_wrapper}>
          <Text style={styles.title}>{degree}</Text>
          <Text style={styles.date}>
            {formatDate(start)} - {formatDate(end)}
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle_wrapper}>
            {institution}
            {gpa && <Text>{gpa}</Text>}
          </Text>
          <Text style={styles.date}>{location}</Text>
        </View>
        {i !== data.length - 1 && <View style={styles.line} />}
      </View>
    ))}
  </Section>
);

const Projects = ({data}) => (
  <Section title={"Projects"}>
    <View style={styles?.wrapper}>
      {data.map(({title, url, description}, i) => (
        <View key={i}>
          <View style={styles.title_wrapper}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.subTitle_wrapper}>
            <Link style={{textDecoration: "none", color: "#666"}} src={url}>
              {url}
            </Link>
          </View>
          <View style={styles.lists}>
            {description?.split("\n")?.map((resp, i) => (
              <ListItem key={i}>{resp}</ListItem>
            ))}
          </View>
          {i !== data.length - 1 && <View style={styles.line} />}
        </View>
      ))}
    </View>
  </Section>
);

const Experience = ({data}) => (
  <Section title="Experience">
    {data.map(({role, start, end, location, description, company}, i) => (
      <View key={i} style={styles?.wrapper}>
        <View style={styles.title_wrapper}>
          <Text style={styles.title}>{role}</Text>
          <Text style={styles.date}>
            {formatDate(start)} - {formatDate(end)}
          </Text>
        </View>
        <View style={styles.subTitle_wrapper}>
          <Text>{company}</Text>
          <Text>{location}</Text>
        </View>
        <View>
          {description?.split("\n").map((responsibility, i) => (
            <ListItem key={i}>{responsibility}</ListItem>
          ))}
        </View>
        {i !== data.length - 1 && <View style={styles.line} />}
      </View>
    ))}
  </Section>
);

const Skills = ({data}) => {
  console.log(data);
  return (
    <Section title="Skills">
      {data?.split(",").map((line, i) => (
        <Text key={i} style={{fontSize: 11}}>
          {line}
        </Text>
      ))}
    </Section>
  );
};

const Languages = ({data}) => {
  console.log(data);
  return (
    <Section title={"Languages"}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        {data?.map(({language, proficiency}, i) => (
          <View key={i}>
            <Text style={{fontSize: 12}}>{language}</Text>
            <Text style={{fontSize: 10, color: "#777"}}>{proficiency}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
};

function Resume({data}) {
  // const resumeData = useSelector((state) => state.resume);
  console.log(data);
  const {contact, education, experience, skills, projects, summary, languages} =
    data;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header data={contact} />
        {summary?.summary && (
          <Section title={"summary"}>
            <Text style={{fontSize: 10}}>{summary?.summary}</Text>
          </Section>
        )}
        {education?.length > 0 && <Education data={education} />}
        {experience?.length > 0 && <Experience data={experience} />}
        {projects?.length > 0 && <Projects data={projects} />}
        {skills.skills && <Skills data={skills.skills} />}
        {languages?.length > 0 && <Languages data={languages} />}
      </Page>
    </Document>
  );
}

export default Resume;
