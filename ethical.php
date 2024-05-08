<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <meta name="author" content="Jadyn Reilly">
    <title>PHP Implementation</title>

    <?php
    echo '<link rel="stylesheet" type="text/css" href="imp.css">';
    ?>
    
</head>

<body>

<?php
    $go_back_link = "imp2.php";
    $home_page_link = "index.html";
    $html_implementation_link = "imp1.html";

    $title = "Extended Reality (XR) Technology Ethical Concerns";

    $impact_on_perception = [
        "XR devices incorporate several sensors and displays, which allow them to analyze sensor inputs and provide suitable responses on 
        the display, resulting in an immersive experience. To create a sense of presence in a virtual setting, these devices are designed to 
        evoke emotions and sensations and capture them using sensory systems integrated with the human body. Through vibro-haptic and thermo-haptic sensors, 
        these devices generate vibrational and thermal feedback within the virtual realm, simulating physical touch sensations on the user's skin. [5]",
        
        "XR technologies have the potential to significantly alter users' perception of reality by blending virtual elements with their 
        physical environment. Extensive research has demonstrated that prolonged exposure to 
        virtual environments can impair users' perception of time and space, which can cause disorientation upon 
        returning to the real world surroundings, leading users to question what is real and what is simulated. [4]",

        " In addition, the immersive nature of XR experiences may influence users' emotional responses and behaviors. For example, 
        users could grow attached to virtual locations or characters, making it harder to tell the difference between reality 
        and fiction and possibly influencing their relationships and responsibilities in the real world. [4]"
    ];

    $threat_to_health = [
        "The blurring of boundaries between a physical and virtual reality, particularly for those who spend extended amounts of time in VR and MR environments, 
        can cause cognitive dissonance, confusion, and psychological harm. [4]",

        "The damages from poorly designed or faulty XR systems can cause anything from simulator sickness to extremely serious long-term 
        health problems. Extended use of XR applications can lead to headaches, nausea, fatigue, dizziness, and blurry vision. [5]"
    ];

    $potential_for_addiction = [
        "Individuals may become addicted to XR experiences due to their intensely engaging and immersive qualities. 
        As with other types of technological dependency, like an addiction to gaming or social media, XR addiction can show up as compulsive use, 
        withdrawal symptoms, and impaired functioning in daily life. [4]",

        "Research suggests that individuals with predisposing factors, such as underlying mental health issues or susceptibility to addictive behaviors,
        may be at higher risk of developing XR addiction. [4] Additionally, some XR experiences include addictive components, such as 
        videos games or engaging social interactions, which increases the likelihood of addiction for vulnerable people.",

        "Addiction to XR can have serious negative impacts on a person's mental and physical health as well as their ability to function
        in social situations, the classroom, and the workplace. To reduce these risks, interventions that encourage responsible consumption
         and offer assistance to those who are addicted to XR are essential."
    ];

    $data_collection = [
        "To improve functionality, optimize performance, and personalize experiences, XR technologies gather massive amounts of user data. 
        Concerns regarding privacy and security are raised by the possibility that this data contains sensitive information including 
        biometric data, surveillance, tracking, and intrusion. [4]",

        "To go into further detail, the sensitive data collected by XR applications like biometric data includes things such as iris identification, 
        pupil tracking, gaze tracking, as well as an individual's physical appearance. Additonally, details on the users' social activities, assets, 
        daily life, home interior, and occupations can be found in the collected data. [5]",

        "The growth of XR devices and applications has raised concerns about consent and data protection. There are concerns regarding transparency and informed consent because users might not always be 
        aware of the extent to which their data is being gathered, how it is being used, and who has access to it. Additionally, it has been proven that XR technologies are prone to cyber attacks, particularly data hacks. 
        These vulnerabilities not only compromise the integrity and privacy of user data but also pose significant risks to the security of XR systems and the overall user experience. [5]"    
    ];

    $access_and_inclusion = [
        "XR technologies have the potential to generate new kinds of marginalization and exclusion, particularly among individuals without 
        access to the required technology. [4] This exclusion has the potential to exacerbate already-existing 
        disparities in education, employment opportunities, and social participation."
    ];
?>

<body>
    

    <a href="<?php echo $go_back_link; ?>" class="option-button">Go Back</a>
    <a href="<?php echo $home_page_link; ?>" class="option-button">Home Page</a>


    <h1 class="title" style="font-size: 50px;"><?php echo $title; ?></h1>

    <p style="color: rgb(174, 183, 241); text-align: center; font-family:Courier New,Courier,monospace; font-size: 15px;">XR technology presents significant ethical concerns and societal implications that need to be addressed.<br><br>Click each box to learn more!</p>

    <br> 

    <button class="collapsible" style="color: rgb(225, 81, 144); font-size:150%;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; text-align: center;">Impact on Users' Perception of Reality</button>
    <div class="ethical">
        <ul>
            <?php foreach ($impact_on_perception as $point) { ?>
                <li style="color: rgb(174, 183, 241);">
                    <p style="color: ghostwhite; font-family:Courier New,Courier,monospace; font-size: 15px; line-height: 1.7; text-align: center;"><?php echo $point; ?></p>
                </li>
            <?php } ?>
        </ul>
    </div>

    <button class="collapsible" style="color: rgb(225, 81, 144); font-size:150%;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; text-align: center;">Threat to Human Health</button>
    <div class="ethical">
        <ul>
            <?php foreach ($threat_to_health as $point) { ?>
                <li style="color: rgb(174, 183, 241);">
                    <p style="color: ghostwhite; font-family:Courier New,Courier,monospace; font-size: 15px; line-height: 1.7; text-align: center;"><?php echo $point; ?></p>
                </li>
            <?php } ?>
        </ul>
    </div>




    <button class="collapsible" style="color: rgb(225, 81, 144); font-size:150%;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; text-align: center;">Potential for Addiction</button>
    <div class="ethical">
        <ul>
            <?php foreach ($potential_for_addiction as $point) { ?>
                <li style="color: rgb(174, 183, 241);">
                    <p style="color: ghostwhite; font-family:Courier New,Courier,monospace; font-size: 15px; line-height: 1.7; text-align: center;"><?php echo $point; ?></p>
                </li>
            <?php } ?>
        </ul>
    </div>

    <button class="collapsible" style="color: rgb(225, 81, 144); font-size:150%;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; text-align: center;">Data Collection</button>
    <div class="ethical">
        <ul>
            <?php foreach ($data_collection as $point) { ?>
                <li style="color: rgb(174, 183, 241);">
                    <p style="color: ghostwhite; font-family:Courier New,Courier,monospace; font-size: 15px; line-height: 1.7; text-align: center;"><?php echo $point; ?></p>
                </li>
            <?php } ?>
        </ul>
    </div>

    <button class="collapsible" style="color: rgb(225, 81, 144); font-size:150%;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; text-align: center;">Access and Inclusion</button>
    <div class="ethical">
        <ul>
            <?php foreach ($access_and_inclusion as $point) { ?>
                <li style="color: rgb(174, 183, 241);">
                    <p style="color: ghostwhite; font-family:Courier New,Courier,monospace; font-size: 15px; line-height: 1.7; text-align: center;"><?php echo $point; ?></p>
                </li>
            <?php } ?>
        </ul>
    </div>
    <br>

    <script>
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    </script>

<div style="text-align: center;">
    <img src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/ecabf7a/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F67%2Ff4%2Ff57ea38a412ab3d6dafb875ddb21%2Fadobestock-292854916.jpeg" alt="vr" width="50%">
</div>

<h1 class="title" style= "font-size: 50px;">Conclusion</h1>
        <h2 style= "color: rgb(174, 183, 241); text-align: center; font-family: Courier New, Courier, monospace; font-size: 15px; line-height:1.9">
        In conclusion, Extended Reality (XR) technology provides an intriguing variety of benefits, including enhanced immersive experiences and innovative educational 
        and training opportunities. However, it also introduces significant concerns regarding ethics and risks. Issues like the impact on users' perceptions of reality,
         hazards to human health, the possibility of addiction, and data gathering privacy concerns need to be taken seriously. Ultimately, it is up to viewers to critically 
         assess and form their own opinions about XR technology and how it might impact the world around us.<br>  I hope you all enjoyed my project!
      </h2>
      <br><br>
    
</body>
</html>
