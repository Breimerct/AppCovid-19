<template>
  <div>
    <b-navbar id="barra" type="dark" variant="dark" fixed class="text-white d-flex flex-center">
      <b-navbar-brand class="text-center center">
        <b-button variant="dark" v-b-modal="'my-modal'">
          <b-icon-info-circle></b-icon-info-circle>
        </b-button>
      </b-navbar-brand>
      <p class="center-title h3">Covid-19 en Colombia</p>
    </b-navbar>

    <b-modal
    ok-only
      size="sm"
      hide-footer
      hide-header
      id="my-modal"
      centered
      content-class="text-center"
    >
    <!-- https://lh3.googleusercontent.com/-tIks1TOPXEY/Xroh7ExP5YI/AAAAAAAAABo/sjLRMPDWGFAxPKeVzAUVoIpWKJME2Xy7QCEwYBhgLKs4DAL1Ocqx4bWrmkXglxudrATAJ5eC-k3PhJ8V-KUjQYMDL7rZY06_PZpLox-cCC3qydK-8VYteShUnXpLaVkof4mrlr_1b9WhXzk0C-N6NnioM8QhqJGZ5MVcvX5rMG5DXVOLF1pA5PNFsGH0ALT6-jN2-LzAN9Jkr-C_hXnXnV3t-Hv-926vcPcQfFt18AY8i1lFh92xIuMTpmTAizEx1EOMLpmZFFcwJ4j7LSY-TmzDdjHp7ymggtQdtJYvA3ZiliTbLTcEY-EJfqzt08vLHLHcIeLfWtAJGSSSTacxPTSVkkRYdfM5VmfmDCrX6xn8uvdygSACUz6BJs8zGZvSzib5_3IZEeSgyu0wCCm_vS0j9bYvpxrJrwACarsXvwFG5R-OlVm7joOhaeJ84KV96DMSpqKqAGf7BEdSh3pS5XhZFd7psXv7q20A6Ws2BRa0XoQgP-PHZAQdvjdzOdH_pUfS9jQqSzalL14Bmjle9CsAwkxJPPFIJdS5YuiWlgBp-gKE90xA3HAUhXkLlcWO2cNIYW2jNocQGo7K0v9QLLhQYM9OUZrgnu8zC4F6lBoYp9H7VkP3HPFivZ1hihxn8yNNsyxomPAs_BkfESV2pMI3agfYF/w140-h140-p/WhatsApp%2BImage%2B2020-05-11%2Bat%2B11.10.09%2BPM.jpeg -->
    <!-- https://lh3.googleusercontent.com/-1MJlfJV2AU8/Xroef9yEssI/AAAAAAAAAAs/XU69shg8NpgimOt0FbGtOxZoyGEVuE6AQCEwYBhgLKs4DAL1Ocqx4bWrmkXglxudrATAJ5eC-k3PhJ8V-KUjQYMDL7rZY06_PZpLox-cCC3qydK-8VYteShUnXpLaVkof4mrlr_1b9WhXzk0C-N6NnioM8QhqJGZ5MVcvX5rMG5DXVOLF1pA5PNFsGH0ALT6-jN2-LzAN9Jkr-C_hXnXnV3t-Hv-926vcPcQfFt18AY8i1lFh92xIuMTpmTAizEx1EOMLpmZFFcwJ4j7LSY-TmzDdjHp7ymggtQdtJYvA3ZiliTbLTcEY-EJfqzt08vLHLHcIeLfWtAJGSSSTacxPTSVkkRYdfM5VmfmDCrX6xn8uvdygSACUz6BJs8zGZvSzib5_3IZEeSgyu0wCCm_vS0j9bYvpxrJrwACarsXvwFG5R-OlVm7joOhaeJ84KV96DMSpqKqAGf7BEdSh3pS5XhZFd7psXv7q20A6Ws2BRa0XoQgP-PHZAQdvjdzOdH_pUfS9jQqSzalL14Bmjle9CsAwkxJPPFIJdS5YuiWlgBp-gKE90xA3HAUhXkLlcWO2cNIYW2jNocQGo7K0v9QLLhQYM9OUZrgnu8zC4F6lBoYp9H7VkP3HPFivZ1hihxn8yNNsyxomPAs_BkfESV2pMI3agfYF/w140-h140-p/20180910_134136.jpg -->
    <!-- @/assets/perfil.jpg -->
    <b-avatar class="text-center" src="https://lh3.googleusercontent.com/-1MJlfJV2AU8/Xroef9yEssI/AAAAAAAAAAs/XU69shg8NpgimOt0FbGtOxZoyGEVuE6AQCEwYBhgLKs4DAL1Ocqx4bWrmkXglxudrATAJ5eC-k3PhJ8V-KUjQYMDL7rZY06_PZpLox-cCC3qydK-8VYteShUnXpLaVkof4mrlr_1b9WhXzk0C-N6NnioM8QhqJGZ5MVcvX5rMG5DXVOLF1pA5PNFsGH0ALT6-jN2-LzAN9Jkr-C_hXnXnV3t-Hv-926vcPcQfFt18AY8i1lFh92xIuMTpmTAizEx1EOMLpmZFFcwJ4j7LSY-TmzDdjHp7ymggtQdtJYvA3ZiliTbLTcEY-EJfqzt08vLHLHcIeLfWtAJGSSSTacxPTSVkkRYdfM5VmfmDCrX6xn8uvdygSACUz6BJs8zGZvSzib5_3IZEeSgyu0wCCm_vS0j9bYvpxrJrwACarsXvwFG5R-OlVm7joOhaeJ84KV96DMSpqKqAGf7BEdSh3pS5XhZFd7psXv7q20A6Ws2BRa0XoQgP-PHZAQdvjdzOdH_pUfS9jQqSzalL14Bmjle9CsAwkxJPPFIJdS5YuiWlgBp-gKE90xA3HAUhXkLlcWO2cNIYW2jNocQGo7K0v9QLLhQYM9OUZrgnu8zC4F6lBoYp9H7VkP3HPFivZ1hihxn8yNNsyxomPAs_BkfESV2pMI3agfYF/w140-h140-p/20180910_134136.jpg" size="6rem"></b-avatar>
    <b-card-text class="mt-3 h5">
        Breimer Correa
    </b-card-text>
    <b-card-text class="mt-3 text-secondary">
        junior web developer v.1.0
    </b-card-text>
    <b-avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1280px-Facebook_f_logo_%282019%29.svg.png" size="3rem" class="m-1" target="blank" href="https://web.facebook.com/Breimerct"></b-avatar>
    <b-avatar src="https://www.globetesting.com/wp-content/uploads/2019/01/githublogo.png" size="3rem" class="m-1"></b-avatar>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "info"
};
</script>

<style scoped>
.center-title {
  margin-left: 25%;
  margin-right: 25%;
}
</style>