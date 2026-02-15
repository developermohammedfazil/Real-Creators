export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Grocery Jute Bags: The Perfect Shopping Companion',
    slug: 'grocery-jute-bags-shopping-companion',
    excerpt: 'Discover why grocery jute bags are becoming the preferred choice for eco-conscious shoppers and retailers.',
    content: `
      <p>Grocery shopping has evolved, and so have the bags we use. Grocery jute bags are revolutionizing the way we shop, offering strength, sustainability, and style in one package.</p>

      <h2>Built for Heavy Loads</h2>
      <p>Grocery jute bags are specifically designed to handle the weight of your weekly shopping. With reinforced handles and sturdy construction, they can carry fruits, vegetables, and even heavy items like milk and canned goods without tearing.</p>

      <h2>Eco-Friendly Alternative</h2>
      <p>Every time you use a jute grocery bag, you're preventing plastic waste from entering our environment. These bags are 100% biodegradable and can be reused hundreds of times, making them the ultimate sustainable shopping solution.</p>

      <h2>Easy to Clean and Maintain</h2>
      <p>Unlike plastic bags that tear easily, jute grocery bags can be spot-cleaned or hand-washed when needed. They dry quickly and maintain their shape, ensuring long-lasting use.</p>

      <h2>Perfect for Retailers</h2>
      <p>Retailers offering branded grocery jute bags create a positive shopping experience while promoting their brand. Customers appreciate the quality and will use these bags repeatedly, providing ongoing brand visibility.</p>
    `,
    image: '/images/products/grocery-bag.webp',
    author: 'Real Creators Team',
    date: '2024-01-15',
    category: 'Products',
    readTime: '4 min read',
  },
  {
    id: '2',
    title: 'Custom Printed Jute Bags: Make Your Brand Stand Out',
    slug: 'custom-printed-jute-bags-branding',
    excerpt: 'Learn how custom printed jute bags can elevate your brand and create lasting impressions with customers.',
    content: `
      <p>Custom printed jute bags are more than just packaging—they're powerful marketing tools that showcase your brand's commitment to quality and sustainability.</p>

      <h2>Unlimited Design Possibilities</h2>
      <p>From simple logos to complex artwork, custom printing allows you to create bags that perfectly represent your brand. Choose from various printing techniques including screen printing and digital printing for stunning results.</p>

      <h2>Premium Brand Perception</h2>
      <p>A well-designed custom jute bag elevates your brand image. The natural texture of jute combined with professional printing creates a premium feel that customers associate with quality.</p>

      <h2>Walking Advertisements</h2>
      <p>Every time a customer carries your custom printed jute bag, they're promoting your brand. These bags are reused frequently, providing continuous exposure to potential new customers.</p>

      <h2>Perfect for Events and Promotions</h2>
      <p>Custom printed jute bags make excellent giveaways at trade shows, corporate events, and promotional campaigns. They're practical gifts that recipients will actually use and appreciate.</p>
    `,
    image: '/images/products/customize-jute-bags.webp',
    author: 'Real Creators Team',
    date: '2024-01-10',
    category: 'Branding',
    readTime: '5 min read',
  },
  {
    id: '3',
    title: 'Jute Gift Bags: Elegant Packaging for Special Occasions',
    slug: 'jute-gift-bags-elegant-packaging',
    excerpt: 'Explore how jute gift bags add a touch of elegance and sustainability to your gift-giving.',
    content: `
      <p>Gift presentation matters, and jute gift bags offer the perfect combination of elegance, sustainability, and practicality for any special occasion.</p>

      <h2>Natural Elegance</h2>
      <p>The natural texture and warm tones of jute create an elegant, rustic aesthetic that's perfect for gifts. Whether it's a wedding favor, corporate gift, or holiday present, jute bags add a sophisticated touch.</p>

      <h2>Versatile Sizes and Styles</h2>
      <p>Jute gift bags come in various sizes, from small pouches for jewelry to large bags for bigger items. Add ribbons, tags, or custom printing to personalize them for any occasion.</p>

      <h2>Reusable and Memorable</h2>
      <p>Unlike disposable gift wrap, jute gift bags can be reused by recipients. This makes your gift even more valuable and memorable, as the bag itself becomes a useful item.</p>

      <h2>Perfect for Businesses</h2>
      <p>Retailers and businesses can use branded jute gift bags to enhance the unboxing experience. They create a premium feel that customers remember and appreciate.</p>
    `,
    image: '/images/products/gift-bag.webp',
    author: 'Real Creators Team',
    date: '2024-01-05',
    category: 'Products',
    readTime: '4 min read',
  },
  {
    id: '4',
    title: 'Promotional Jute Bags: Cost-Effective Marketing Solutions',
    slug: 'promotional-jute-bags-marketing',
    excerpt: 'Discover why promotional jute bags are one of the most effective and affordable marketing tools for businesses.',
    content: `
      <p>In today's competitive market, promotional jute bags offer businesses an affordable yet highly effective way to increase brand visibility and customer loyalty.</p>

      <h2>Maximum Brand Exposure</h2>
      <p>Promotional jute bags are used repeatedly, providing ongoing brand exposure. Each use is an opportunity for your brand to be seen by potential customers, making them incredibly cost-effective marketing tools.</p>

      <h2>Bulk Order Savings</h2>
      <p>Ordering promotional jute bags in bulk significantly reduces the per-unit cost. This makes them an affordable option even for small businesses with limited marketing budgets.</p>

      <h2>Positive Brand Association</h2>
      <p>By choosing eco-friendly promotional items, your brand is associated with sustainability and environmental responsibility. This resonates strongly with modern consumers who value green initiatives.</p>

      <h2>Versatile Marketing Tool</h2>
      <p>Use promotional jute bags at trade shows, conferences, store openings, or as customer appreciation gifts. They're practical items that people actually want and use, ensuring your marketing investment isn't wasted.</p>

      <h2>Long-Term Value</h2>
      <p>Unlike digital ads that disappear or flyers that get thrown away, promotional jute bags provide years of brand exposure. Calculate the cost per impression, and you'll find they're one of the most economical marketing strategies available.</p>
    `,
    image: '/images/products/promotional-bags.webp',
    author: 'Real Creators Team',
    date: '2023-12-28',
    category: 'Marketing',
    readTime: '5 min read',
  },
]
