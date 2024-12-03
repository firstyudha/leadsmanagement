import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Home, Search, Heart, User } from 'react-native-feather';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      
      <ScrollView style={styles.scrollView}>
        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Image
            source={require("../../assets/HomeScreenFazzio.jpg")}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroText}>
            YAMAHA{'\n'}REVS YOUR HEARTS.
            </Text>
            <TouchableOpacity
            style={styles.shopNowButton}
            onPress={() => navigation.navigate('Promo')}
              >
            <Text style={styles.shopNowText}>Shop now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>MAXI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>CLASSY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>MATIC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryTab}>
            <Text style={styles.categoryText}>SPORT</Text>
          </TouchableOpacity>
        </View>

        {/* Flash Sale Section */}
        <View style={styles.saleSection}>
          <View style={styles.saleHeader}>
            <Text style={styles.saleTitle}>Flash sale</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          {/* Product Grid */}
          <View style={styles.productGrid}>
            <View style={styles.productCard}>
              <Image
                source={require("../../assets/FAZZIO.png")}
                style={styles.productImage}
              />
              <View style={styles.stockBadge}>
                <Text style={styles.stockText}>4 stockleft</Text>
              </View>
              <Text style={styles.productName}>TITAN-{'\n'}Hybrid Lux</Text>
              <Text style={styles.productPrice}>Rp 23.955.000</Text>
            </View>

            <View style={styles.productCard}>
              <Image
                source={require("../../assets/Xmax (1).png")}
                style={styles.productImage}
              />
              <View style={styles.stockBadge}>
                <Text style={styles.stockText}>4 stock left</Text>
              </View>
              <Text style={styles.productName}>XMAX -{'\n'}250 Connected</Text>
              <Text style={styles.productPrice}>Rp 66.855.000</Text>
            </View>
            
          </View>
          <View style={styles.productGrid}>
            <View style={styles.productCard}>
              <Image
                source={require("../../assets/AEROX.png")}
                style={styles.productImage}
              />
              <View style={styles.stockBadge}>
                <Text style={styles.stockText}>4 stockleft</Text>
              </View>
              <Text style={styles.productName}>Prestige Silver-{'\n'}Connected/ABS</Text>
              <Text style={styles.productPrice}>Rp 32.115.000</Text>
            </View>

            <View style={styles.productCard}>
              <Image
                source={require("../../assets/Lexi.png")}
                style={styles.productImage}
              />
              <View style={styles.stockBadge}>
                <Text style={styles.stockText}>4 stock left</Text>
              </View>
              <Text style={styles.productName}>Magma Black-{'\n'}Connected/ABS</Text>
              <Text style={styles.productPrice}>Rp 30.355.000</Text>
            </View>
            
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home stroke="#00A76F" width={24} height={24} />
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Search stroke="#666" width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Heart stroke="#666" width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User stroke="#666" width={24} height={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80, // Tinggi header
    justifyContent: 'center', // Pusatkan secara vertikal
    alignItems: 'center', // Pusatkan secara horizontal
    backgroundColor: '#fff', // Latar belakang (opsional)
    borderBottomWidth: 1, // Garis bawah (opsional)
    borderBottomColor: '#eee', // Warna garis bawah
  },
  logo: {
    height: 40, // Sesuaikan tinggi gambar
    width: 120, // Sesuaikan lebar gambar
  },
  scrollView: {
    flex: 1,
  },
  heroBanner: {
    height: 200,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    justifyContent: 'center',
  },
  heroText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  shopNowButton: {
    backgroundColor: '#7AC555',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  shopNowText: {
    color: '#fff',
    fontWeight: '600',
  },
  categories: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  saleSection: {
    padding: 16,
  },
  saleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  saleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#666',
  },
  productGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f5f5f5',
  },
  stockBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  stockText: {
    color: '#fff',
    fontSize: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    padding: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    paddingTop: 0,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  activeNavText: {
    color: '#00A76F',
    fontSize: 12,
    marginTop: 4,
  },
});