import {Text, View, StyleSheet} from "@react-pdf/renderer";

function Section({title, style, children}) {
  const styles = StyleSheet.create({
    section_title: {
      textTransform: "uppercase",
      color: "#333",
      fontSize: 13,
    },

    section_title_underline: {
      height: 1,
      margin: "2px 0px 4px 0px",
      backgroundColor: "#888",
    },
    section_end: {
      height: 2,
      margin: "10px 0px",
      backgroundColor: "#eee",
    },
  });
  return (
    <View>
      {title && (
        <>
          <Text style={styles.section_title}>{title}</Text>
          <Text style={styles.section_title_underline}></Text>
        </>
      )}
      {children}
      <View style={styles.section_end}></View>
    </View>
  );
}

export default Section;
