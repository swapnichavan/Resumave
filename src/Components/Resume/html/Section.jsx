import {Text, View} from "./Renderer";
import styles from "./Styles";

function Section({title, children}) {
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
