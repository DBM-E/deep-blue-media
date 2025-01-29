<template>
  <div class="dbm-page">
    <div class="dbm-section">
      <div class="dbm-section-header">The Company</div>
      <div class="dbm-about-us">
        <p>
          <strong>Deep Blue Media</strong> is a video production company based
          in Spokane, Washington.
        </p>
        <p>
          We specialize in combining our love of adventure with our expertise in
          video production, culminating in content that is exciting to direct
          and extraordinary to experience.
        </p>
      </div>
    </div>

    <div class="dbm-section">
      <div class="dbm-section-header">The Crew</div>
      <div class="dbm-profiles">
        <div class="dbm-profile-card">
          <div class="dbm-profile-card-image chris"></div>
          <div class="dbm-profile-card-text">
            <div class="dbm-profile-card-title">Chris</div>
            <p class="dbm-profile-card-description">
              Chris McNaughton is a seasoned filmmaker with extensive experience collaborating with prominent platforms and studios, including Netflix, AMS Studios, and Rising Tide Productions. Renowned for his adventurous documentary films, his work has captured breathtaking narratives across diverse landscapes—from the rugged peaks of the Andes in Argentina to the icy depths off the coast of Alaska and the secluded islands of the South Pacific. Chris is passionate about filmmaking and he aims to make your project a work of art.  
            </p>
          </div>
        </div>
		
		<div class="dbm-profile-card">
          <div class="dbm-profile-card-image evan"></div>
          <div class="dbm-profile-card-text">
            <div class="dbm-profile-card-title">Evan</div>
            <p class="dbm-profile-card-description">
              Evan is a seasoned multimedia enthusiast with a passion for storytelling and a strong foundation in both creative and technical aspects of media production. With a background in IT, he possesses a deep understanding of computer systems, software, and hardware, enabling him to seamlessly integrate technology into his filmmaking process. His expertise extends to both video and audio equipment, allowing him to capture and manipulate media with precision and efficiency. He is eager to contribute his skills and enthusiasm to compelling projects that push creative boundaries and leverage the power of multimedia storytelling.
            </p>
          </div>
        </div>
		
		<div class="dbm-profile-card">
          <div class="dbm-profile-card-image austin"></div>
          <div class="dbm-profile-card-text">
            <div class="dbm-profile-card-title">Austin</div>
            <p class="dbm-profile-card-description">
              Austin is a driven newcomer in video production. Bringing more than just ambition, he comes with a rich tapestry of knowledge from diverse fields, ready to contribute to your production’s success. His hard-working, can-do attitude is the perfect addition to any project or organization aiming to innovate in visual storytelling. With Austin, you're not just working with an individual; you're gaining a collaborator who can enhance your video projects with creativity, technical skill, and a unique perspective. Austin can be the catalyst for your next big leap in video content production, where his dedication to excellence will shine through every frame.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-about-us {
  margin: -0.5rem auto 0;
  max-width: 640px;
}

.dbm-profiles {
  column-gap: 0.5rem;
  display: grid;
  row-gap: 0.5rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;

    /* NOTE(vika): If the last grid item is by itself. */
    > :last-child:nth-child(odd) {
      grid-column-end: 3;
      grid-column-start: 1;
      margin-left: auto;
      margin-right: auto;
      max-width: 640px;
    }
  }
}

$dbm-profile-image-size: 8rem;
$dbm-profile-image-spacing: calc($dbm-profile-image-size / 2);

.dbm-profile-card {
  background: var(--app-card-color);
  border: 2px solid var(--app-card-border-color);
  border-radius: var(--app-border-radius);
  margin-top: $dbm-profile-image-spacing;
  position: relative;
}

.dbm-profile-card-image {
  background: var(--app-image-placeholder-color);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--app-border-radius);
  height: $dbm-profile-image-size;
  left: calc(50% - $dbm-profile-image-spacing);
  position: absolute;
  top: -$dbm-profile-image-spacing;
  width: $dbm-profile-image-size;
}

.dbm-profile-card-image.evan {
  background-image: url("assets/evan-preview.png");
}

.dbm-profile-card-image.chris {
  background-image: url("assets/chris-preview.png");
}

.dbm-profile-card-image.austin {
  background-image: url("assets/austin-preview.png");
}

.dbm-profile-card-text {
  padding: $dbm-profile-image-spacing 2rem 1rem;
}

.dbm-profile-card-title {
  font: 1.5rem/1 "Vollkorn", serif;
  padding: 1rem 0 0.5rem;
  text-align: center;
}
</style>
