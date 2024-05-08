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
    $next_page_link = "ethical.php";

    $pageTitle = "Extended Reality (XR) Technology";
    $welcomeMessage = "Welcome To My Project Where We Will Explore The Implications Of XR Technologies.";
    $overviewTitle = "Understanding Extended Reality (XR) Technology";
    $defineXr = "Click Each Box To Explore AR, VR, and MR";
    $prosconsXR = "What are the Benefits and Limitations of XR Technologies?";
    $educationUse = "For this segment of my project, I will be concentrating specifically on the use of extended reality (XR) in education.";

    $overviewContent = <<<EOD
    In our rapidly evolving digital world, technologies have drastically altered our perception and interactions with reality. As we take a deeper look
    into Extended Reality (XR) technologies, we can see that the extent of human experience is currently merging immersive computer-generated environments and information with the real world.XR technologies are developing quickly and are 
    increasingly prevalent in various industries, including education, which I will touch later.
    The term "XR" or Extended Reality is an ambiguous umbrella term which encompasses Augmented Reality (AR), Virtual Reality (VR), and Mixed Reality (MR).[2]
    These cutting edge technologies redefine human interaction through immersive digital interfaces, which alter the way we interact, experience,
    and understand the physical world visually.
EOD;

    $arDescription = <<<EOD
    Augmented Reality (AR) refers to the real-time integration of digital information with the physical world, enhancing users' experiences 
            by overlaying virtual elements onto their surroundings. The term was created by Tom Caudell and David Mizell in 1990.[1] Since then, AR has rapidly evolved alongside 
            the growth of mobile devices and advancements in technology. Today, AR is changing the way we interact with our surroundings and has resulted in applications across a variety of different industries, changing 
            the way we view and interact with digital content in the real world. Applications include medical simulations, educational tools, 
            virtual try-on experiences in the fashion industry, and aids for navigation.[2]
EOD;

    $vrDescription = <<<EOD
    Virtual Reality (VR) completely immerses users in digitally produced realities, creating a powerful experience of presence and interaction.[1] Although introduced by Jaron Lanier in 1987,
    the concept of VR traces all the way back to The Link Trainer, a device utilizied for pilot training in World War II, which marked the beginning of technology that closely resembled VR.[2]
    Today, VR is most commonly associated with Head-mounted displays (HMDs) or headsets, which transport users to virtual environments while blocking out the physical world. VR was originally designed for entertainment
    and video games, but has since rapidly grown into various industries, including marketing, prototyping, job training, fashion, and healthcare. [2]
EOD;

    $mrDescription = <<<EOD
    Mixed Reality (MR) seamlessly integrates digital content with real-world surroundings, blurring the line between the physical and virtual 
    worlds.[1] This concept enables users to interact with and control digital objects simultaneously as if they were a part of their physical environment.
    Unlike Virtual Reality (VR), which immerses users entirely in virtual environments, and Augmented Reality (AR), which overlays digital 
    elements onto the real world, Mixed Reality (MR), allows digital and physical objects to coexist and interact with real-world surroundings in real time. This technology enables dynamic visualizations, interactive training scenarios, and immersive simulations, 
    offering new possibilities for education, entertainment, and many other applications.[3] An example of MR would be the new release by Apple, Apple Vision Pros.
    EOD;
?>

<body>


        <a href="<?php echo $home_page_link; ?>" class="option-button">Home Page</a>
        <a href="<?php echo $next_page_link; ?>" class="nextpage-button">Next Page</a>


<h1 class="title"><?php echo $pageTitle; ?></h1>
<h2 style="color: rgb(174, 183, 241); margin-left: 20px; font-size: 15px; font-family:Courier New,Courier,monospace;"><?php echo $welcomeMessage; ?></h2>

<br>

<h1 style="color: rgb(225, 81, 144); margin-left: 80px;font-size:150%;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; margin-bottom: 0px ;"><?php echo $overviewTitle; ?></h1>

<div class="container">
  <p class="intro">
    <?php echo $overviewContent; ?>
  </p>

  <video id="myVideo" width="320" height="240" autoplay loop muted>
    <source src="vrgoggles.mp4" type="video/mp4">
  </video>

</div>


<br><br><br>
<h1 style="color: rgb(174, 183, 241); text-align: center; font-size:100%; font-family:Courier New,Courier,monospace; margin-bottom: 0px ;"><?php echo $defineXr; ?></h1>
<br><br>

<div class="xrterms">

<div class="box ar">
Augmented Reality (AR)
<div class="content">
  <p><?php echo $arDescription; ?></p>
</div>
</div>

<div class="box vr">
Virtual Reality (VR)
<div class="content">
  <p><?php echo $vrDescription; ?></p>
</div>
</div>

<div class="box mr">
Mixed Reality (MR)
<div class="content">
  <p><?php echo $mrDescription; ?></p>
</div>
</div>

</div>

<div class="images">
      <img class="placeholder-image1" src="https://learn.g2.com/hubfs/G2CM_FI224_Learn_Article_Images-%5BAugmented_Reality%5D_V1a.png" alt="ar">
      <img class="placeholder-image2" src="https://assets.weforum.org/article/image/4_Rccp3-97LfklPFhiq5i_Qm3fBE4VRs7T1DMKDyt7w.jpg" alt="vr">
      <img class="placeholder-image3" src="https://media.wired.com/photos/647e2a2040f1b0ff578445a2/master/pass/Apple-Vision-Pro-Gear.jpg" alt="mr">
    </div>    


<br><br><br><br><br><br>
<hr>


<h1 class="title" style="color: rgb(225, 81, 144); text-align: center;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;margin-bottom: 10px; font-size: 40px;"><?php echo $prosconsXR; ?></h1>
<p style="color: ghostwhite; text-align:center; font-size: 15px; font-family:Courier New,Courier,monospace; font-size: 17px;"><?php echo $educationUse; ?></p>

<div style="margin-top: 60px;"  class="proscons">
  <div class="box benefits">
    Benefits
    <div class="content2">
      <ul>
        <li>
          <p><strong>Enhanced Learning Experiences:</strong> XR provides more immersive and engaging learning experiences, which can lead to improved knowledge retention. [6]</p>
        </li>
        <li>
          <p><strong>Accessibility:</strong> XR can remove geographical and physical barriers, allowing students to access educational content remotely. [6]</p>
        </li>
        <li>
          <p><strong>Interactivity:</strong> XR enables interactive learning experiences, promoting active participation and deeper understanding of concepts. [6]</p>
        </li>
        <li>
          <p><strong>Real-world Simulations:</strong> XR allows for realistic simulations, providing practical training in various fields such as science, history, and geography. [6]</p>
        </li>
        <li>
          <p><strong>Customizability:</strong> Individual learning needs and preferences can be met using XR applications, which accommodate a wide range of learning styles. [6]</p>
        </li>
        <li>
          <p><strong>Innovative Teaching Methods:</strong> XR enables the integration of gamification and other innovative teaching techniques, making learning more enjoyable and effective. [6]</p>
        </li>
        <li>
          <p><strong>Collaborative Learning:</strong> XR facilitates collaborative learning experiences, allowing students to work together on projects and experiments regardless of their physical location. [6]</p>
        </li>
        <li>
          <p><strong>Skill Development:</strong> XR can help develop critical thinking, problem-solving, and spatial reasoning skills through hands-on activities and simulations. [6]</p>
        </li>
        <li>
          <p><strong>Safety:</strong> XR provides a safe environment for students to explore potentially hazardous subjects such as chemistry without the risk of injury. [6]</p>
        </li>
        <li>
          <p><strong>Information Quantity:</strong> XR has greater information density than traditional methods, due to 3D images and videos that convey more data. [6]</p>
        </li>
        <li>
          <p><strong>Exciting Learning Opportunities:</strong> XR allows students to visit places that would be expensive or impossible to access otherwise, enhancing the learning experience. [6]</p>
        </li>
        <li>
          <p><strong>Automated Gamification:</strong> XR enables the automation of gamification within the learning process. In a traditional method, 
            it is challenging for teachers or trainers to consistently recognize and reward students for their achievements and positive interactions. However, XR makes that possible because the teaching-learning process can be prepared ahead of time
             providing opportunities for personalized feedback and rewards. [6]</p>
        </li> 
      </ul>
    </div>
</div>



<div class="box limitations">
  Limitations
  <div class="content2">
      <ul>
          <li>
              <p><strong>Financial Costs:</strong> Implementing XR technology can be costly, requiring investments in hardware  (e.g. high-end computers, VR goggles), software  (e.g. proprietary software built from scratch or
                subscriptions), and the cost of training individuals how to use these technologies. [6]</p>
          </li>
          <li>
              <p><strong>Technical Issues:</strong> XR environments may encounter technical issues such as software glitches or hardware compatibility problems, disrupting the learning process. [6]</p>
          </li>
          <li>
              <p><strong>Ethical Concerns:</strong> XR creates ethical concerns around privacy, data security, and identity protection, requiring careful evaluation and implementation of safety precautions. [6]</p>
          </li>
          <li>
              <p><strong>Physical Health Risks:</strong> Prolonged use of XR devices may lead to physical discomfort or health issues such as eye strain, headaches, or motion sickness. [6]</p>
          </li>
          <li>
              <p><strong>Learning Curve:</strong> Learning to use XR technology properly may take time and effort, which may impact initial acceptance rates among students as well as teachers. [6]</p>
          </li>
          <li>
              <p><strong>Content Quality:</strong> The quality of XR educational content can vary, with some experiences being more immersive and educational than others. [6]</p>
          </li>
          <li>
              <p><strong>Accessibility Issues:</strong> The digital divide within education may widen if certain students lack access to XR devices or reliable internet connections. [6]</p>
          </li>
          <li>
              <p><strong>Teacher Training:</strong> Teachers may require additional training and support to effectively integrate XR technology into their teaching practices, 
                posing a challenge in terms of professional development. [6]</p>
          </li>
          <li>
            <p>Exisiting studies concluded that VR in classrooms leads to reduced human interaction as well as some students lack the patience for learning these technologies and it results in poor concentration. [7]</p>
        </li>
      </ul>
  </div>
</div>
</div>



<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<script>
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('show');
    });
  });
</script>







</body>
</html>
