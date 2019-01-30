using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DeveloperEvaluation.Model
{
    public class MeanMedianMode
    {
        /// <summary>
        /// Calculates and the mean value from the array list of numbers.
        /// </summary>
        /// <param name="arr">List Of Numbers.</param>
        /// <returns>Mean value from the list of number</returns>
        public static int Mean(int [] arr)
        {
            int total = 0;

            //can also use: var total = arr.Sum();
            foreach (var item in arr)
            {
                total += item;
            }

            var mean = total / arr.Length;
            return mean;
        }


        /// <summary>
        /// Calculates and the mode value from the array list of numbers.
        /// </summary>
        /// <param name="arr">List Of Numbers.</param>
        /// <returns>Median value from the list of numbers</returns>
        public static int Median(int[] arr)
        {
            Array.Sort(arr);
            
            int median;
            if (arr.Length % 2 == 0)
            { // if even
                int midIndex1 = (arr.Length / 2) - 1;
                int midIndex2 = (arr.Length / 2);
                median = (arr[midIndex1] + arr[midIndex2]) / 2;
            }
            else
            { // if odd
                double arrLength = arr.Length;
                var midIndex = (int) Math.Floor(arrLength / 2);
                median = arr[midIndex];
            }

            return median;
        }


        /// <summary>
        /// Calculates and the mode value from the array list of numbers.
        /// </summary>
        /// <param name="arr">List Of Numbers.</param>
        /// <returns>Mode value(s) from the list of numbers</returns>
        public static List<int> Mode(int[] arr)
        {
            var occurence = new Dictionary<int, int>();

            foreach (var item in arr)
            {
                if (!occurence.ContainsKey(item))
                {
                    occurence[item] = 0;
                }
                occurence[item] = ++occurence[item];
            }


            var maxOccurence = 0;
            List<int> modes = new List<int>();

            foreach(var num in occurence) {
                    if (num.Value > maxOccurence)
                    {
                        modes.Clear();
                        modes.Add(num.Key);
                        maxOccurence = num.Value;
                    }
                    else if (num.Value == maxOccurence)
                    {
                        modes.Add(num.Key);
                    }
            }

            if (modes.Count == occurence.Count)
            {
                modes.Clear();
            }

            return modes;
        }
    }
}
