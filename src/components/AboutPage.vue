<template>
  <!--เกี่ยวกับเรา เริ่ม-->
  <section id="home" class="about-us">
    <div class="container">
      <div class="about-us-content">
        <div class="row">
          <div class="col-sm-12">
            <div class="single-about-us">
              <div class="about-us-txt">
                <h2>สำรวจความงดงามของโลกที่สวยงาม</h2>
                <div class="about-btn">
                  <button class="about-view">
                    สำรวจตอนนี้
                  </button>
                </div>
                <!--/.about-btn-->
              </div>
              <!--/.about-us-txt-->
            </div>
            <!--/.single-about-us-->
          </div>
          <!--/.col-->
        </div>
        <!--/.row-->
      </div>
      <!--/.about-us-content-->
    </div>
    <!--/.container-->
  </section>
  <!--เกี่ยวกับเรา จบ-->
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-us {
  background-color: #f4f4f4; /* ตัวอย่างสีพื้นหลัง */
  padding: 60px 0;
  text-align: center;
}

.about-us-txt h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.about-btn {
  margin-top: 20px;
}

.about-view {
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.about-view:hover {
  background-color: #e69500;
}
</style>
