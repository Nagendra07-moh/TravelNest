import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import HeightSpacer from "../Reusable/HeightSpacer";
import { SIZES } from "../../constants/theme";
import Country from "../Tiles/Country/Country";

const Places = () => {
  const countries = [
    {
      _id: "64c62bfc65af9f8c969a8d04",
      country: "USA",
      description:
        "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
      imageUrl:
        "data:image/png;base64,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",
      region: "North America, USA",
    },
    {
      _id: "64cf2c565d14628d0ac0a2b7",
      country: "Pakistan",
      description:
        "Pakistan is a country located in South Asia. It shares borders with India, Afghanistan, Iran, and China. The country is known for its diverse culture, rich history, and breathtaking landscapes. From the mighty peaks of the Karakoram mountain range to the vast deserts of Thar, Pakistan offers a wide range of geographical wonders. Its cities, like Karachi, Lahore, and Islamabad, are bustling hubs of activity, blending modernity with tradition. Pakistan has a deep-rooted history, with ancient civilizations like the Indus Valley civilization leaving their mark. The country is also famous for its delicious cuisine, warm hospitality, and vibrant festivals.",
      imageUrl:
        "data:image/png;base64,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",
      region: "South Asia, Pakistan",
    },
    {
      _id: "64cf2c935d14628d0ac0a2b9",
      country: "India",
      description:
        "India is a vast and diverse country in South Asia. It is known for its cultural heritage, historical landmarks, and geographical variety. The country boasts a rich history that dates back thousands of years, with influences from various civilizations. India's landscape ranges from the snowy peaks of the Himalayas to the lush greenery of Kerala's backwaters. The Taj Mahal, Jaipur's palaces, and the ancient temples of Varanasi are just a few of the country's iconic landmarks. Indian cuisine is famous worldwide, offering a symphony of flavors and spices. With its bustling cities, serene villages, and colorful festivals, India presents a kaleidoscope of experiences for travelers.",
      imageUrl:
        "data:image/png;base64,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",
      region: "South Asia, India",
    },
    {
      _id: "64cf2d095d14628d0ac0a2bd",
      country: "England",
      description:
        "England, a country within the United Kingdom, is steeped in history and culture. Its capital, London, is a bustling metropolis known for its iconic landmarks, including the Tower Bridge, Buckingham Palace, and the British Museum. England's countryside is picturesque, with rolling hills, charming villages, and historical sites such as Stonehenge. The country has a rich literary heritage, with famous authors like William Shakespeare, Jane Austen, and Charles Dickens hailing from its shores. English pubs, afternoon tea, and traditional events like Wimbledon and the Changing of the Guard add to its unique charm. England's influence on politics, literature, and sport has made it a global powerhouse with a lasting legacy.",
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEhMVFRUWFR8ZGBUYFxYSIRsXFxYWHRUXGhoYHSgsGRolHRUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy4mICU3LS0tLTU3Ny43Ly0tKy4tLS0vLS0tLTAvLS0tLS0tLS0tLS8vLS0tLS0tLS0tLS0tLf/AABEIAKcBLgMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABDEAACAQEDBQoKCgIDAQAAAAABAgADBAURBgchMXESExdBUVNUYYHSIjRScoKRk6GxsxUWMjVDYnOSstEUQiTB8eH/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QANhEAAgEBBAUKBgMBAQEAAAAAAAECAwQRIVEFEhQxUhYiM2GBkaGx0eETMjRBU/BxgsEV8UL/2gAMAwEAAhEDEQA/ALes1pSqoemyup1MpDD1ieKSavRnOnKnLVmrmes9MDrUphgVYBgRgQQCCOQg64WGKBBMo82Fmr4vZj/jv5IG6pn0daejo6pNpW2ccJ4midBPdgVff2TVqsJwr0iFxwFRfCQ7GGrYcD1Sxp1oVPlZHlBx3mpm0wEAQBAEAQBAEAQBALxzS/dtP9Sp/MymtvTPs8ibQ+QzM4/iFTzqfzFlbaujf7kXWhfrI/28ioZWHaCAIBIcgPH6PpfLab7N0iK3S/0c+zzRcFb7LbD8JarejiD5eE6IrTmAIAgCAIAgCAIAgHehRaowRFZ2OpVBYnYBrhtJXs9WJP8AJzNbXq4Pa23lObXBnO06k956hINW3RjhDE3QoN/MWTdlz2O7qZNNEpKB4VRjpPnO2k7MdkrateU8Zsl0qLb1aavZHb9ziU0xWyrvjc42KqNg1t7htkCpa0sInQWXQU5c6u7lkt/ovEgV6XrXtTbqtUZzxDUBsUaBIU5ym75M6KhZqVCN1ON3n3mFMTeZl2XpWszbujUZDxgaQdqnQZlCcoO+LNFezUq8dWpG/wDfsye3FnER8FtS7g84uJU7V1r7+yTadrTwkc7atBTjzqDvWT39+5k2s1oSooemyup1MpDA9oktNNXoopwlCWrJXM9Z6YHWpTDAqwDAjAggEEchB1z1O4EDyjzYWevi9mP+O/k/aQnzdadmjqkylbZxwniaJUE9xWF/ZN2qwnCvSIXiqDwkOxh8DgZZU60KnysjyhKO81M2GAgCAIAgCAIAgF45pfu2n+pU/mZTW3pn2eRNofIZmcfxCp51P5iyttXRv9yLrQv1kf7eRUMrDtBAEAkOQHj9H0vltN9m6RFbpf6OfZ5ouCt9lth+EtVvRxB8vCdEVpzAEAQBAEAQBAO9Ci1RgiKzsdSqCxOwCG0lez0n2Tua2vVwe1tvKeQuDOdp1J7zINW3RWEMTdCg3vLLuu57Jd1MmmiUlA8KoxGJ8520mVtWtKeM2S6VG96sFeyO35nDppitlXfG5xsVUbBrb3SBUtaWES/smgpy51d3LJb/AERAb0vWtam3VaoX5BqA2KNAkKc5Td8mdHZ7NSs8bqcbvPvMKYm8k9x5D2m04M43mmeNx4RHUn94SRTs05YvAqbVpihRwjzn1bu/0vLAujJKyWYYCmKjEaXqAOT2EYDsEm06EIfY5y0aUtNZ/NcslgQC/MhrTZ8WpjfqfKo8IDrTj7MeyQqlmnHFYnRWXTFCthPmvr3d/rcReRy3My670rWVt1RqMh4xrB2qdBmUJyg74s0V7NSrx1akb/8AP4ZPrjziU3wW1Lvbc4uJU7RrX3ybTtaeE8DnbXoKcedQd6ye/wBya2a0JUUPTZXU6mUhge0SWmmr0UM4ShLVmrmes9MTpVpq4KsAynQQQCCOsHXPU7sUCCZR5r7PWxeyneH8n7SHs1p2aOqTKVtnHCeJonQT3FX39k5arCcK9IqMcBUHhIdjD4HA9UsqdaFRc1keUHHeaqbDAQBAEAQBALxzS/dtP9Sp/MymtvTPs8ibQ+QzM4/iFTzqfzFlbaujf7kXWhfrI/28ioZWHaCAIBIcgPH6PpfLab7N0iK3S/0c+zzRcFb7LbD8JarejiD5eE6IrTmAIAgCAIB3oUWdgiKzs2gKoLE7ANc8bSV7PSfZOZrq9XB7W28p5C4M52nUnvPVIVW3RWEMTdGg3vLLuu57Jd1MmmiUlA8KoxGJ85217JW1a0p4zZLpUb3qwV7I7fmcOmmK2Zd8by2xVRsGtvdIFS1pYRL+y6CnLnV3csli/REBvW9q9qbdVqhfkGoDYo0CQpzlN3tnR2ey0rOrqcbvPvMKYm8k9x5EWm04M43mnyuPCI6k/vCSKdmnLF4FTa9MUKPNjzn1bu/0vLCuPJazWTAom6fnH8JuziXsAk2nQhDcc3atJV7ThJ3LJbvftN3NxAEAhGTmcqy2nBK//HqHyjihPU/F6WG0yZVsc44xxRpjWi9+BvL6yYstsG6dcHI0VUwB1aDjqYbcZXVKEJ70Wlk0jXs2EXesnu9uy4r6/Mh7TZ8WQb9THGg8IDrT+seyQalmnHFYo6Wy6YoVubLmy693f63EXkctjNuu9a1lbdUahTlGsHap0GZQnKDvizRaLNSrx1akb/Nfwye3HnEpvgtqXe25xcWU9ZGtffJtO1p4TwOdtegpx51B3rJ7/fwJtZ66VFDoyup1MpDA9oktNNXooZwlCTjJXM9J6YnSrSVwVYBlIwKkAgjkIOuep3YoECyjzX2eti9lbeH8jS1M9mtOzQOSTaVulHCeK8TRKgnuKwv3J602FsLRSKgnAOPCRtjjRj1HA9UsadaFRc1kaUHHeaubDEQBAEAvHNL920/1Kn8zKa29M+zyJtD5DMzj+IVPOp/MWVtq6N/uRdaF+sj/AG8ioZWHaCAIBIcgPH6PpfLab7N0iK3S/wBHPs80XBW+y2w/CWq3o4g+XhOiK05gCAIB3o0mdgiKzMxwCqCxJ5ABrhu5XsE9yczXV62D2tt4TyFwdzt1hPeeoSDVtsY4QxN8KDe8su67msd3UyaaJSUDwqjEYkfmdtPZjhK6rWlPGbJdKje1GCvbI9fmcSmmK2Vd8bnGxVewa290r6lrSwjiX9l0FOXOru5ZLf6LxIDel7V7U26rVC/INQGxRoEhTnKbvbOioWWlQV1ON3n3mFMSQSa48iLTacGcbzT8px4RH5U1+vDtkinZpyxeCKq1aXoUMI859W7v9LywrjyVs1kwKJuqnOPgzdnEvZhJtOhCG45q16StFpwk7lkt3q+03k3EAQDVX7lFZrCuNoqhSRiEHhM3moNJ26uubKVGdT5UYynGO8rS/M6todsLLTWkg43AqM20alHVp2ywp2CCXPxI0q7+xXknmg3mT2VlrsJAo1MafHSfw07B/qetSO2aatCFTesczONSUdxaOTmcmy2nBK3/AB6h8o4oT1PxbGw7ZW1bHOGMcUSYVovfgbq+sl7LbBumXcuRoqpgD1EnU42gyvqUIT3rEtbJpKvZsIu+OT3e3YV9fmRFps2LIN+p+UgO6A601+rHskGpZpwxWKOlsmmKFfmy5r693f63EYkctTMuu9a9lbdUKjIeMDSp85ToPxmUJyg74s0V7NSrq6pG/wA1/DJ/cecSm+C2pd7bnFxZDtGtfeOuTadrTwngc5atBTjfKg71k9/o/AmtnrrUUOjKynUykMDsIktNPFFFOEoPVkrmek9MTpWpK6lWAZSMCpAYEchB1wm070CBZR5rrPWxeytvD+QcWpk9Q1p2Yjqk6lbpRwnj5midBPFFYX7k9abE2FopFRjoceErbGGjsOB6pY060KnysjSi47zVzYYiAXjml+7af6lT+ZlNbemfZ5E2h8hmZx/EKnnU/mLK21dG/wByLrQv1kf7eRUMrDtBAEAkOQHj9H0vltN9m6RFbpf6OfZ5ouCt9lth+EtVvRxB8vCdEVpzAO9GkzsERWZjqVQWJPUBrhtJXsE9ydzXV62D2tt4TyFwZzt4k7cT1SDVtsY4QxN8aDe8su6rlsd3UyaSJSGHhVGOkj8ztp7NXVK6rWlPGbJdKje1GCvZHr9zh00xWyrvjc42KqNg0F/cOuV9S1pYRxL+y6CnLnV3cslv9F4kBvS9q9qbdVqjPyDUo81RoHxkKdSU8ZM6OhZqVBXU43eb/l7zCmJvJNceRFptODON5p+U48Ij8qa/XhJFOzTli8EVNq0xQoYR5z6t3f6FhXHkrZrJgyJuqnOP4TdnEvZhJtOhCG45u1aSr2jCTuWS3er7TeTcQBANVfuUNmsS7q0VQp4kHhM2xRpO3VNlKjOo+ajGU1HeVhlFnRtFbFLKu8J5Zwaof+k7MT1yypWGEcZ4+RGlXb3YEDrVWdi7sWZjiWYliTyknSe2TUrsEaDpAEAQBAN7k7lba7CQKVTGnzT+EvYP9fRImmrZ4VN6xzM41JR3Fo5OZyLLacErf8eoeJjihP5X4vSw7ZW1bHOGMcUSY1oyweBub7yWsts8Jl3LkaKqYA9vE3bK6pQhPesS1smkq9nwi71k/wBw7Cvb8yJtNmxZBv1Mf7IPCA601+rGQqlmnHFYo6WyaYoV+bLmvr3dj9biMyOWpm3Ve1eytuqNQpyjWp85ToPxmcKkoPmsj2iy0q6uqRv8127yf3FnDpPgtqXem8tcWQ7RrT3jrkyna08J4HO2vQVSPOoPWWT3+jJpQrK6hkYMp1MpDA7CJLTTxRRSjKD1ZK5npPTE6VqSupV1DKRgVYBgR1g656m1igQHKPNdQrYvZG3h/IOLIdnGnZiOqTaVtlHCePmaJ0E8UVhfuT9psTbm0Uio4nHhK2xho7Dp6pY06sKi5rI0oOO8t7NL920/1Kn8zKq29M+zyJdD5DMzj+IVPOp/MWVtq6N/uRdaF+sj/byKhlYdoIAgEhyA8fo+l8tpvs3SIrdL/Rz7PNFwVvstsPwlqvscQfMNCkzsERSzHUqgsTsA1zom0sWVqJ9k7mur1sHtbbwnkDBnO3iT3nqkGrboxwhib40G9+BZd1XJY7upk0kSkAPCqMdJ852+GqV1WtKeM2SqVG96sFeyP35nDpJitmXfW5xsQo2DW3uEgVLXFYRxOgsugqkudXdyy+/ovEgF63tXtTbqtUL8g1KPNUaB8ZBnOU3fJnRULLSoK6nG7zf8swpiSCTXHkRabTgzjeaZ/wBnHhEdSa/XhJFOzTli8EVVq0vQoc2POl1bu/0LCuPJWzWTAom6qD8R/CPZxL2SbToQhuOatekq9pwk7lkt3v2m8m4gCAau/MobNYl3VoqheRPtM2xRpO3VNlOlOo+ajGU1HeVhlFnRr1sUsq7wnlnBnOziT3nrljSsMY4zxI067e4gVaqzsXdizHWzEsTtJ1ycklgjSdIPBAEA43Y5RPbjy9DdjlEXC9DdjlEXC9DdjlEXC9HG6HKIuF6N9k7ljarDgKVXdU+afwl7ONewiaKtnhU3rHMzjVcdzLSybzk2O1YJVP8Aj1TxORuSfyv/AHhK2rY6kMViiTCvGWDNzfeS1mtg3TLuXI0VUwB7eJu2V1ShCe/eW1k0lXs+EXesn+4dhXt+5E2mzYso36n5SDSB1pr9WMg1LPOGKxR0tk0vQr4S5suvd2P1uIxuhyzQWtxnXVfVaytuqNUryrjip2qdB265lCo4Pms0WiyUrQrqkb+v795Prjzi0amC2kb03ljwlO3jX37ZNp2uLwlgc5atA1YY0ecsvv7k1oVlqKGRgynUykMDsIktNPcUUoSg9WSuZ6T0xPOvRWopR1VlOgqwDAjrB1z1Np3oGPdd2UrKm9UUCJuiwUY4AscThjqGPFPZzlN3yPEklcjS5x/EKnnU/mLItq6N/uRbaF+sj/byKhlYdoIAgEhyA8fo+l8tpvs3SIrdL/Rz7PNFxOuII5ZaHEGouq5bHd1MmmiUgB4VRiMT5ztM6teU8ZsUqN71YK9kdvzOLSTFbMBVby28FRsGtvcJAqWuKwjiX9l0DUlzqz1Vl9/REBvW+a1qbdVqpfkGOCjYo0CQp1JTfOZ0dnslKgrqcbuv795hbocswN9zJPceRNptODMN5pn/AGcaSOpNfrwkinZpyxeCKq16XoUMI859W7tfpeWFceStmsmBRN1U5x8GPZxL2CTqdCEN2/M5q1aSr2jCTuWS3e/abybiAIBqr9yistiXdWiqqci/aZtijSfhNlOjOo7ooxlOMd5WGUedOtVxSyAUE8s4M52cSe89csaVhisZ4kWdov3EBrWguxd3LMdbM26J2k65OUbsEadZZnXdjlE9uPL0N2OURcL0N2OURcL0N2OURcL0N2OURcL0fTP0ZQ5ml7NP6nO68s2WVyyH0ZQ5ml7NP6jXlmxcsh9GUOZpezT+o15ZsXLIfRlDmaXs0/qNeWbFyyH0ZQ5ml7NP6jXlmxcsh9GUOZpezT+o15ZsXLIfRlDmaXs0/qNeWbFyyMinTCgKoCgagAAPUJjfeeneAY72KkTiaaEnWSin/qY6qyNiq1FgpPvOP8CjzVP9i/1GrHIfGqcT7x/gUeap/sX+o1Y5D41TifeetKiqaFVVHUAvwnqSW4xlKUvmd56T0xEAQCM5x/EKnnU/mLI9q6N/uRa6F+sj/byKhlYdoIAgEhyA8fo+l8tpvs3SIrdL/Rz7PNFxy0OIPOtQV9DKrecA3xnjSe8yjOUfldx5f4FHmqf7F/qeascjL41TifeP8CjzVP8AYv8AUasch8apxPvOUsVIHEU0BGohFH/UaqyDq1Hg5PvMiZGsQBAEAxqlgosSzUqbE6yUUk9pEyUpL7nlyOv0ZQ5ml7NP6jXlmxcsh9GUOZpezT+o15ZsXLIfRlDmaXs0/qNeWbFyyH0ZQ5ml7NP6jXlmxcsh9GUOZpezT+o15ZsXLIfRlDmaXs0/qNeWbFyyH0ZQ5ml7NP6jXlmxcsiA8JtToye0buSu2x8J1PJ6H5H3e44TanRk9o3cjbHwjk9D8j7vccJtToye0buRtj4Ryeh+R93uOE2p0ZPaN3I2x8I5PQ/I+73HCbU6MntG7kbY+Ecnofkfd7jhNqdGT2jdyNsfCOT0PyPu9xwm1OjJ7Ru5G2PhHJ6H5H3e44TanRk9o3cjbHwjk9D8j7vccJtToye0buRtj4Ryeh+R93uOE2p0ZPaN3I2x8I5PQ/I+73HCbU6MntG7kbY+Ecnofkfd7jhNqdGT2jdyNsfCOT0PyPu9xwm1OjJ7Ru5G2PhHJ6H5H3e44TanRk9o3cjbHwjk9D8j7vccJtToye0buRtj4Ryeh+R93uOE2p0ZPaN3I2x8I5PQ/I+73NdlBls9soNQagqBip3Qct9lgdRUck11LQ5x1biTY9ERs1VVVNu6/C7NXZkVkcuBAEAz7jvM2SulcKHK4+CTuccVI14HlmdOepLWI9qs6tFJ0m7ryWcJtToye0buSTtj4Sm5PU/yPu9xwm1OjJ7Ru5G2PhHJ6H5H3e44TanRk9o3cjbHwjk9D8j7vccJtToye0buRtj4Ryeh+R93uOE2p0ZPaN3I2x8I5PQ/I+73HCbU6MntG7kbY+Ecnofkfd7jhNqdGT2jdyNsfCOT0PyPu9xwm1OjJ7Ru5G2PhHJ6H5H3e44TanRk9o3cjbHwjk9D8j7vccJtToye0buRtj4Ryeh+R93uOE2p0ZPaN3I2x8I5PQ/I+73HCbU6MntG7kbY+Ecnofkfd7jhNqdGT2jdyNsfCOT0PyPu9xwm1OjJ7Ru5G2PhHJ6H5H3e44TanRk9o3cjbHwjk9D8j7vccJtToye0buRtj4Ryeh+R93uOE2p0ZPaN3I2x8I5PQ/I+73IJIZ0IgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAWdwa2bnq/rp9yWGxxzZynKCvwR8fUcGtm56v66fcjY45scoK/BHx9Rwa2bnq/rp9yNjjmxygr8EfH1HBrZuer+un3I2OObHKCvwR8fUcGtm56v66fcjY45scoK/BHx9Rwa2bnq/rp9yNjjmxygr8EfH1HBrZuer+un3I2OObHKCvwR8fUcGtm56v66fcjY45scoK/BHx9Rwa2bnq/rp9yNjjmxygr8EfH1HBrZuer+un3I2OObHKCvwR8fUcGtm56v66fcjY45scoK/BHx9Rwa2bnq/rp9yNjjmxygr8EfH1HBrZuer+un3I2OObHKCvwR8fUcGtm56v66fcjY45scoK/BHx9Rwa2bnq/rp9yNjjmxygr8EfH1HBrZuer+un3I2OObHKCvwR8fU1GVWRVGx2Z66VKrMpUYMUw8JwDqUcs1VrPGENZMmWDS9W011SlFJO/df9lfmQiRC/EAQDaZNXatqtKUXLKrY4lcMdCk6MQeSbKUFOSiyJbrRKz0JVIq9q7zJ1wa2bnq/rp9yTNjjmzn+UFfgj4+o4NbNz1f10+5GxxzY5QV+CPj6jg1s3PV/XT7kbHHNjlBX4I+PqODWzc9X9dPuRscc2OUFfgj4+o4NbNz1f10+5GxxzY5QV+CPj6jg1s3PV/XT7kbHHNjlBX4I+PqODWzc9X9dPuRscc2OUFfgj4+o4NbNz1f10+5GxxzY5QV+CPj6jg1s3PV/XT7kbHHNjlBX4I+PqODWzc9X9dPuRscc2OUFfgj4+o4NbNz1f10+5GxxzY5QV+CPj6jg1s3PV/XT7kbHHNjlBX4I+PqODWzc9X9dPuRscc2OUFfgj4+o4NbNz1f10+5GxxzY5QV+CPj6jg1s3PV/XT7kbHHNjlBX4I+PqODWzc9X9dPuRscc2OUFfgj4+o4NbNz1f10+5GxxzY5QV+CPj6m3+ul3dMo/ulls1XhZzvxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZnejlfYHYKlqpMxOAVSWJPIABpnjs9VK9xPVUi/ubsGaTM5gCAIBi2+8aNnAatUSmDq3RAx2csxlOMd7NtGhVrO6nFv+DA+tVh6TS/dMPj0+JEn/m2v8bH1qsPSqX7o+PT4h/zLX+NnpQyjslRgiV0ZjqVSWJ7AJ6q0HgmYSsFpgtaUGkbWbCIRnOP4hU86n8xZHtXRv8Aci10L9ZH+3kVDKw7QQBAJDkB4/R9L5bTfZukRW6X+jn2eaLjlocQIAgCAYd4XpRs+BrVBTB1FsQPXhrmMpxj8zN1Gz1a2FON5hfWqw9JpfumHx6eZI/5tr/Gx9arD0ml+6Pj0+JD/m2v8bPay5Q2SqwSnaKbMdShhidmOueqrBu5MwqWG004604NI2c2EQ1t537ZrMQK9ZaROrd4rjsOGBmyFKc/lV5i5JbzC+ul3dMo/umezVeFmPxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZj66Xd0yj+6Nmq8LHxYZnz3LwgiAIAgHalTLkKqlmJwCgFiTyADXDdyvBO8nM2For4PajvCeSMGc9mpO3E9UhVbdCOEMWb4UG9+BaFw5N2WxLhQpBTxufCY7WPwGiV1StOp8zJEYRjuNtNRmIBiXledGzLu61RUHFjrPUBrJ2TGU4xV7N1Cz1a8tWnG9/u8gV+ZxHbFbKm4HOOAT6K6h247JCqWt7od50Vk0FGPOru/qX+v0IRarS9Vi9R2djrZiSf/OqRG23ey+p04U46sFcsjrRos7BUUsx1KoLE9gniTbuR7KUYrWk7kTO4s3lWpg1pbel8hcGY7TqX3yXTsknjLAo7VpynDm0VrPPcvV+BLatW77op6SlLEec74est8JY0LNfhTX7/JzVqttSs9atK/q9EZuTd9pbqAr01ZVLMoDYY+CcMThqx5JnVpunLVZHjLWV6NbnH8QqedT+Ysh2ro3+5FvoX6yP9vIqGVh2ggCASHIDx+j6Xy2m+zdIit0v9HPs80XDUbAE8gxlojiCKZN5wLJbMFLbzVP+lQgAn8r6m2aD1SVVsk6eO9GqFWMiWyKbRAOlWkrgqwDKdYIBB2gw1eexk4u9O5kNvzN7Rq4tZ23pvIOLIf8AtezEdUiVLJF4xwLyy6cqQ5tZayz+/uV/e1y17I2FamVHE2tTsYaOzXIU6cofMjo7Pa6NoV9OV/V9+41+EwJJJLiy0tNlwUnfqY/1ckkD8r6x24zfTtE4daKu16JoV8UtV5r/AFE9u7KKxXim9OFxbXRqgadmOhuzTJ9G0xb5ruZzNr0XXofMr45r9wIzlJmrpvi9jfe25pyWU7G1r249ktaVuawmVE6C/wDkrS97nr2R9xaKTUzxEjEHzWGhuyWEKkZq+LvI8ouO8wZmYiAIAgCAIAgHamhYhVBZicAoBYk8gA1mL8LwTvJzNhaK+D2o/wCOnk6GqHs1J24nqkKrbYRwhizdGg3vwLPuHJqy2EYUKQVsNNQ+E52sdPYNErqladT5mSYwjHcbeajMQDEvK8qNmXd1qioOLHWeoDWTsmMpxir2bqFnq15atON5Ar8ziO2K2VNyOccAn0V1Dtx2SFUtb3QOhsugornV3f1L/X6EItVpeqxeo7Ox1sxLH/zqkRtyd7L+nThTjqwVyyOtGkzsFRSzHUqgsTsAniV7uR7KSitaTuRM7jze1amDWlt6XyFwZjtOpffJdOySeMsCjtenKcObRWs89y9X4EtqVbvuiniSlLEec7/Fm+EsaFmvwpr9/k5q1W2pWetWlf1eiIDlHnSrVcUsi7yvONgznYNSe87JaUrDFYzxK6VdvCJX9prvUYvUZnY62YlidpMmpJK5Gl47y7c0v3bT/UqfzMp7b0z7PImUPkMzOP4hU86n8xZW2ro3+5F1oX6yP9vIqGVh2ggCASHIDx+j6Xy2m+zdIit0v9HPs80XBW+y2w/CWq3o4g+XgJ0RWkmycy4tliwUPvtIfhVMWAH5W1r8OqR6tlp1MdzNkasolp5OZf2O2YKW3mqfw6hAxPIr6m2aD1Stq2SpTx3okwqxkSuRjaIB0q0lcFWUMp1ggEHaDrhq8yjJxd8XcyGX5m9pVMWszb03kHFkOzjXsxHVIlSyJ4xwLyy6dqQ5tZayz+/uV/e1z17I2FemV04BtanYw0dmvqkKdOUPmR0dntVG0K+nK/q+67DBmBIJJceWlps2Csd+pj/VycQPyvrHbjN9O0Th1oqrXoihXxXNlmvQnl3ZQ2K8U3pwuLa6NUDTsx0N2aZPo2mLfNdzOatei69DGSvjmsf/AAjOUeatHxexPvbc05JXYra17ceyWtK3NYVO8qJUE/lKzve6K9kfcWim1M8WI0HzWGhuwywhUjNXxd5HcXHeYUzMRAEA7U0LEKoLMTgFALEnkAGsxekrz0nWTmbC018HtJ/x08nQ1QjZqTtxPVIVW2wjhDF+BuhRb3loXBk1ZbCMKFIBsNNQ+E52sfgMB1Suq1p1HzmSIwjHcbeajMQDDvK86NmXd1qioOLHWepVGlj1ATGc4wV8mbqFnq15atOLb/d+RA78ziO2K2VNwOccAn0V1Dtx2CQqlrbwh3nRWTQUY86u7+pf6/TvIRarS9Vi9R2djrZiWPv1DqkRtyd7L6nThTjqwVy6jpRps7BUUsx0BVBYk9QGueJX4I9lJRWtJ3LMmdxZva1TBrS29L5C4M52nUvvPUJLp2STxlgUdr05ShzaK1nn9vV+BLqlS77op4kpRxHW9R/izfAdUsaFmvwpr9/k5q126pWetWlf1eiIDlHnTrVcUsibyvONgznYNIT3nZLSlYYrGeJXSrt4RK/tFd6jF6jM7nWzEsTtJk1JJXI07zznp4IBeOaX7tp/qVP5mU1t6Z9nkTaHyGZnH8QqedT+YsrbV0b/AHIutC/WR/t5FQysO0EAQCQ5AeP0fS+W032bpEVul/o59nmi4K32W2H4S1W9HEHy8J0RWnMAEQCTZOZc2yxYKH32kPwqhLYD8ra0+HVI9Wy06nU8zZGpKJaWTmX9jtmCFt5qn8OoQMTyI+ptmg9UratkqU8d6JMKsZErkY2iAdK1JXUq6hlOgqQGBHWDPGk8GZRk4u+LuZC78zeUqmLWZt6byDiyHZxp7x1SJUsify4F5ZNOVIc2stZZ/f38CAXrc9eytua1MryNrU7GGg7NfVIU4Sh8yOjs9qo2hX0pX9X3XYYMxJBJLjy1tVmwVjv1Mf6uTiB+V9Y7cRsm+naJw60VVr0RQr4rmyzX+r/wnl35QWG8k3lwpLa6NUDT5uOhuzTJ9G0xbvi7mc1a9F16GMlfHNbu3IjGUeapGxexPuDzVQll2K+kr249ktaVve6feVEqC/8AkrO9bpr2R9xaKTU24t0NB61YaGGwyxhOM1fF3kdxa3mHMjE+jLgyasthGFCkA2GBqHwnO1j8BgOqUNWtOo+cyfGEY7jbzUZiAYl5XlRsy7utUVBxY6z1AaydkxnOMFfJm6hZ6taWrTi2QK/M4jtitkXcjnHAJ2quobTjskKpa28IHRWXQUVzq7v6l/r9O8hFqtL1WL1HZ2OtmJY+/UOqRG23ey+p04U46sEkuo60aTOwVFLMdSqCxOwCeJXu5HspRinKTuSJlceb2rUwa0tvS+QuDOdp1L75Lp2STxlgUdq07ThfGitZ5/b1fgS6o933RTxJSliPPd/izfAdUsKFmvwpr9/k5u1W2rWetVlf1eiIDlHnTrVMUsabyvONgznYNIT3nZLSlYYrGePUV067e4r+0V3qMXqMzudbMSxO0mTkklcjQ8Tznp4IAgCAXjml+7af6lT+ZlNbemfZ5E2h8hmZx/EKnnU/mLK21dG/3IutC/WR/t5FQysO0EAQCQ5AeP0fS+W032bpEVul/o59nmi4K32W2H4S1W9HEHy8J0RWnMAQBAOCIBJ8nMurZYsFD77SH4dQk4D8ra1946pHq2WnUx3PM2xqyiWnk3l7Y7Zgu63mqfw6mAxP5W1Ns19UratlqU8d6JEKsZEqkY2iAedeirqVdQynWrAMDtB1zxq9XMyhKUHrRdzIZfmbylUxazNvTeQ2LIdh1r7x1SJUskX8uBeWTTlSF0ay1ln9/cgF63RXsrbmtTK8ja1OxhoPxkOdOUPmR0dntVK0K+nK/q+/cYOEwJBJriy2tNmwVjv1PyXOkD8r6/Xj2TfTtM44PFFVa9EUK+MebLNf6v8Awndgv6xXkm9OFJbXRqgYnZjobaJYUbSm74u5nM2zRlez/Or45rd7dpGb8zUUnbdWWrvQJ0o4NQDzTjiNhx2y0p29rCavKmVBfYsmV5IMS8byo2dd3WqKg6zpPUBrJ6hMZzjBXyZuo2epWlq04tsgd+ZxGbFbKm5HOOMT6K8XbjskKpa28IHQ2XQMVzq7v6l/r9O8g9rtL1WL1HZ2P+zEk/8AwdQkRtt3sv6dKFOOrBJLqOtGkzsFRSzHUqgsTsAnixdyPZSUU5SdyRMrjze1amDWlt6XyBgznbxL75Lp2STxlgUdq05ThzaK1nn9vfwJdUe77op4kpSxHnO/xZvhLChZ78Ka/f5ObtVtqVnrVZdnoiBZR5061TFLIm9Lq3xsGc7F1L7+yWlKwxWM8eorp12/lK+tNoeqxeozO51sxLE9pk5JJXI0XnnPTwQBAEAQBALxzS/dtP8AUqfzMprb0z7PIm0PkMzOP4hU86n8xZW2ro3+5F1oX6yP9vIqGVh2ggCASHIDx+j6Xy2m+zdIit0v9HPs80XBW+y2w/CWq3o4g+XhOiK05gCAIAgCACIBKMnMvLZYsF3W/Uh+HUJOA/K+tfeOqRqtlp1MdzNsKsolpZOZeWO24Lut6qn8OpgMT+VtTfHqldVstSnjvRJhVjIlMjGwQDzr0VqKVdQynWrAMD2GeNJq5mUJyg9aLuZC78zeUnxazNvTeQ2LKdnGvvEiVLIn8mBe2XTtSF0ayvWf39/AgF63RXsrbmtTKch1qdjDQfjIc6cofMjorPaqVoV9OV/n3GFMCQSO6MtrXZ13O6FVeIVMWI2Njjhtxm+FpnFXbyrtGiLNWetdqvq9DdX5nEZsVsqbkc44xPorxbT6ptqWtvCBBsugornV3f1L/X6d5CLXanrMXqOzsf8AZjif/g6hIjbbvZf06cKcdWCSR0o0mdgqKWY6lALE7ANc8SvdyPZSUVrSdyJjceb6tUwa0tvS+QMGc7eJffJdOySeMsCktWnKcObRWs8/t7+BL3a77op4kpSxHH4Tv8Wb4SwoWa/Cmv3+TmrVbalZ61WXZ6IgWUedOrUxSxpvS84+DOdi6l7ceyWlKwxWM8eorp12/lK+tNoeqxeozO51sxLE9pk5JJXI0b8Tznp4IAgCAIAgCAIBeOaX7tp/qVP5mU1t6Z9nkTaHyGZnH8QqedT+YsrbV0b/AHIutC/WR/t5FQysO0EAQCQ5AeP0fS+W032bpEVul/o59nmi4K32W2H4S1W9HEHy8J0RWnMAQBAEAQBAEAEQCU5OZe2yx4Lut+pD8OoScB+V9a+8dUjVbLTqdTNsKsolpZOZd2O24KH3qqfw6mC4n8ram+PVK2rZalPHesyTCrGRKJHNggHnXoLUUq6hlOtWAIPYZ40mrmZQnKD1ou5kKv3N5TfFrK29t5DYlTsOtffIlSyJ/LgXtl07OPNrq9Z/f0fgQC9bqrWVtzXQpyE/ZOxtR2a5CnCUN6Ojs9ppWhX0nf59qMOYm8mdw5v6tYB7Q29IdIVSGYjbpC+/YJKp2VyxlgUVr03TptxpLWee5er8CabzYrqoNU3Ipoo8J8GqMeTEgEn4Swo0MdWCOatVtq13rVZX+XcV9lHnTq1MUsab0vOvgznrC6Qnv7Ja0rDFYzx6iunXb+Ur602h6rF6jM7nWzEsT2mTkklcjQ8cWec9PBAEAQBAEAQBAEAQC8c0v3bT/UqfzMprb0z7PIm0PkMzOP4hU86n8xZW2ro3+5F1oX6yP9vIqGVh2ggCASHIDx+j6Xy2m+zdIit0v9HPs80XBW+y2w/CWq3o4g+XhOiK05gCAIAgCAIAgCAIAIgEpycy9tljwUtv1Ifh1CTgPyvrX3jqkarZadTHczZCrKJa+SmWVmvHFae6Sqoxamw1DlDDQR249UrK1nlS37iVCopkjmg2CAcMMdcHqd24/9k=",
      region: "Europe, England",
    },
    {
      _id: "64cf2d4d5d14628d0ac0a2bf",
      country: "China",
      description:
        "China, the world's most populous country, is located in East Asia. With a history spanning over 5,000 years, it is one of the oldest continuous civilizations. China is known for its diverse landscapes, from the majestic Great Wall winding through mountains to the breathtaking karst scenery in Guilin. Its bustling cities, like Beijing and Shanghai, showcase a unique blend of ancient traditions and modern innovations. Chinese culture is rich in art, music, and philosophy, with iconic elements such as calligraphy, tea ceremonies, and traditional Chinese medicine. The country's cuisine, including dim sum, Peking duck, and Sichuan hotpot, is celebrated globally. China's contributions to science, technology, and literature have had a profound impact on the world, making it a global powerhouse in various fields.",
      imageUrl:
        "data:image/jpeg;base64,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",
      region: "East Asia, China",
    },
  ];
  return (
    <View>
      <HeightSpacer Height={20} />
      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(item, index) => item[index]}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Country item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
