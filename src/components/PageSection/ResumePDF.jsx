import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

import GaramondRegular from '../../assets/fonts/EBGaramond-Regular.ttf'
import GaramondBold from '../../assets/fonts/EBGaramond-Bold.ttf'

Font.register({
    family: 'Garamond',
    fonts: [
      { src: GaramondRegular },
      { src: GaramondBold, fontWeight: 'bold' },
    ],
  });

function MyDocument({
  personalInfo,
  educationItems,
  skillItems,
  workExperienceItems,
  projectItems,
}) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.contact}>{personalInfo.linkedin}</Text>
          <Text style={styles.contact}>
            {personalInfo.phoneNumber} {'\u2022'} {personalInfo.github} {'\u2022'} {personalInfo.email}
          </Text>
        </View>

        {/* EDUCATION */}
        <View style={styles.section}>

           <View style={styles.underline}>
               <Text style={styles.sectionTitle}>EDUCATION</Text>
           </View> 

          {educationItems.map((edu, index) => (
            <View key={index} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{edu.schoolName}</Text>
                <Text style={styles.entryMeta}>
                  {edu.startDate} – {edu.endDate}
                </Text>
              </View>
              <Text>{edu.degree}</Text>
            </View>
          ))}
        </View>

        {/* SKILLS */}
        <View style={styles.section}>

        <View style={styles.underline}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
        </View>

          <View style={styles.skillsList}>
            {skillItems.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>
                • {skill.skill}
              </Text>
            ))}
          </View>
        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>
        
            <View style={styles.underline}>
                <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            </View>

          {workExperienceItems.map((job, index) => (
            <View key={index} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{job.position}</Text>
                <Text style={styles.entryMeta}>
                  {job.startDate} – {job.endDate}
                </Text>
              </View>

              <Text style={styles.entrySubTitle}>{job.company}</Text>
              <Text style={styles.entryDescription}>• {job.jobDescription}</Text>
            </View>
          ))}
        </View>

        {/* PROJECTS */}
        <View style={styles.section}>
            
        <View style={styles.underline}> 
          <Text style={styles.sectionTitle}>PROJECTS</Text>
        </View>

          {projectItems.map((project, index) => (
            <View key={index} style={styles.entry}>
              <Text style={styles.entryTitle}>{project.projectTitle}</Text>
              <Text style={styles.entryDescription}>
              • {project.projectDescription}
              </Text>
            </View>
          ))}
        </View>

      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
    page: {
      paddingTop: 40,
      paddingBottom: 40,
      paddingHorizontal: 40,
      fontFamily: 'Garamond',
      fontSize: 11,
    },
  
    /* Header */
    header: {
      alignItems: 'center',
      marginBottom: 14,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    contact: {
      fontSize: 11,
      textAlign: 'center',
    },
  
    /* Sections */
    section: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontWeight: 'bold',
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 2,
    },
  
    /* Entries (education, jobs, projects) */
    entry: {
      marginBottom: 8,
    },
    entryHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    entryTitle: {
      fontWeight: 'bold',
    },
    entryMeta: {
      fontWeight: 'bold',
    },
    entryDescription: {
      marginTop: 2,
      marginLeft: 10,
    },
  
    /* Skills */
    skillsList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    skillItem: {
      marginBottom: 3,
      marginRight: 10
    },
  });

  export default MyDocument