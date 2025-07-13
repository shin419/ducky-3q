<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-md">
      <q-input outlined v-model="userId" label="Tên người chơi" class="col-8" />
      <q-space></q-space>
      <q-btn color="primary" label="Thêm" class="col-3" @click="addUser()" />
    </div>

    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab name="users" icon="mail" label="Users" no-caps />
      <q-tab name="list" icon="alarm" label="Alarms" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="users">
        <div v-for="(user, key, i) in listUser" :key="key" class="q-pa-sm">
          <div class="row justify-between items-center">
            <div class="col-12 row">
              <div class="text-bold">
                Top {{i + 1}} - {{ key }}
                <q-badge align="top" v-if="i === 0" color="green">
                  <q-icon name="emoji_events" />
                </q-badge>
              </div>
              <q-space></q-space>
              <div style="font-size: 10px">
                {{getLastUpdate(user.updated || 0) || ""}}
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tham gia</div>
              <div class="col-4 q-pl-md">{{user.svtg || 0}}</div>
              <div class="col-4 row justify-end">
                <!--            <q-btn flat icon="add" size="sm" @click="update(key, user, 'svtg')" />-->
                <!--            <q-btn flat icon="remove" size="sm"  @click="update(key, user, 'svtg', true)" />-->
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tỉ lệ thắng</div>
              <div class="col-4 q-pl-md">{{user.ttl || 0}} / {{user.svtg || 0}} ({{percentageFormatter(user.ttl, user.svtg)}})</div>
              <div class="col-4 row justify-end">
                <!--            <q-btn flat icon="add" size="sm"  @click="update(key, user, 'ttl')" />-->
                <!--            <q-btn flat icon="remove" size="sm"  @click="update(key, user, 'ttl', true)" />-->
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tỉ lệ thua</div>
              <div class="col-4 q-pl-md">{{(user.svtg || 0) - (user.ttl || 0)}} / {{user.svtg || 0}} ({{percentageFormatter(((user.svtg || 0) - (user.ttl || 0)), user.svtg)}})</div>
              <div class="col-4 row justify-end">
                <q-btn flat icon="add" size="sm" @click="update(key, user, 'svtg')" />
                <q-btn flat icon="remove" size="sm"  @click="update(key, user, 'svtg', true)" />
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tỉ lệ thắng solo</div>
              <div class="col-4 q-pl-md">{{user.tltsl || 0}} / {{user.svtg || 0}} ({{percentageFormatter(user.tltsl, user.svtg)}})</div>
              <div class="col-4 row justify-end">
                <q-btn flat icon="add" size="sm" @click="update(key, user, 'tltsl')" />
                <q-btn flat icon="remove"  size="sm" @click="update(key, user, 'tltsl', true)" />
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4"> Tỉ lệ thắng team</div>
              <div class="col-4 q-pl-md">{{user.tltt || 0}} / {{user.svtg || 0}} ({{percentageFormatter(user.tltt, user.svtg)}})</div>
              <div class="col-4 row justify-end">
                <q-btn flat icon="add"  size="sm" @click="update(key, user, 'tltt')" />
                <q-btn flat icon="remove" size="sm"  @click="update(key, user, 'tltt', true)" />
              </div>
            </div>
          </div>
          <q-separator class="q-mt-md" />
        </div>
      </q-tab-panel>

      <q-tab-panel name="list">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { getDatabase, ref, set, onValue } from 'firebase/database'
const db = getDatabase()
import moment from 'moment';

export default {
  data() {
    return {
      userId: '',
      tab: 'users',
      listUser: [],
      messages: {},
    }
  },

  computed: {
  },

  methods: {
    addUser() {
      if (!this.userId) {
        return;
      }
      set(ref(db, 'users/' + this.userId), {
        ttl: 0,
        tltsl: 0,
        tltt: 0,
        svtg: 0
      })

      this.userId = ""
      this.$q.notify({
        type: 'positive',
        message: 'Thành công rồi!',
        timeout: 500
      });
    },
    update(key, user, field, isRemove) {
      let dataUpdate = {
        ttl: user.ttl,
        tltsl: user.tltsl,
        tltt: user.tltt,
        svtg: user.svtg,
        updated: new Date().getTime()
      }

      if (isRemove) {
        dataUpdate[field]--
        if (field !== 'svtg') {
          dataUpdate.ttl--
          dataUpdate.svtg--
        }
      } else {
        dataUpdate[field]++
        if (field !== 'svtg') {
          dataUpdate.ttl++
          dataUpdate.svtg++
        }
      }

      set(ref(db, 'users/' + key), dataUpdate);

      if (field === 'svtg') {
        this.$q.notify({
          avatar: 'https://creatorset.com/cdn/shop/files/Screenshot_2024-04-24_173231.png?v=1713973029',
          message: 'Gà!!!!!!!!!!',
          caption: 'Hahaha.......',
          color: 'green',
          timeout: 1000
        });
        // this.speak(this.messages.lost)
      } else {
        // this.speak(this.messages.win)
        // this.$q.notify({
        //   avatar: 'https://i.pinimg.com/originals/54/43/36/5443362c2d3d3af48672c8be7b080afb.jpg',
        //   message: '',
        //   color: 'green',
        //   timeout: 1000
        // });
      }
    },
    getData() {
      onValue(ref(db, '/users'), (snapshot) => {
        const sortedObj = Object.fromEntries(
          Object.entries(snapshot.val()).sort(([, a], [, b]) => b.ttl - a.ttl)
        );
        this.listUser = sortedObj;
      })

      onValue(ref(db, '/messages'), (snapshot) => {
        this.messages = snapshot.val();
      })
    },
    percentageFormatter(a, b) {
      let num = (((a || 0) / (b || 0)) * 100) || 0;
      return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num / 100);
    },
    speak (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';           // Ngôn ngữ: tiếng Việt
      utterance.pitch = 1;                // Độ cao (0 - 2)
      utterance.rate = 1;                 // Tốc độ (0.1 - 10)
      utterance.volume = 1;               // Âm lượng (0 - 1)
      speechSynthesis.speak(utterance);
    },
    getLastUpdate (time) {
      if (!time) {
        return ""
      }
      return moment(time).calendar();
    },
  },

  created() {
  },
  mounted() {
    this.getData()
  },
}
</script>
